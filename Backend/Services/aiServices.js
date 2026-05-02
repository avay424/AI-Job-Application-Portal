
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});


const generateResumeFallback = (resume, job) => {
  return `
Improved Resume Suggestion:

- Add clear technical skills section relevant to job
- Highlight projects with measurable impact
- Include tools, frameworks, and technologies
- Improve structure: Summary → Skills → Projects → Experience
- Align keywords with job description

Original Resume Context:
${resume?.slice(0, 500)}...
`;
};

const generateCoverLetterFallback = (job) => {
  return `
Dear Hiring Manager,

I am excited to apply for this role. I have strong technical skills and hands-on experience in full-stack development. I am eager to contribute to your team and grow professionally in this position.

Sincerely,  
Candidate
`;
};

export const analyzeWithAI = async (resume, job) => {
  
    const prompt = `
You are a professional ATS resume evaluator used by recruiters.

Return ONLY valid JSON:

{
  "atsScoreSection": {
    "totalScore": number,
    "label": "Excellent | Good | Average | Poor",
    "summary": string
  },
  "matchedSkills": [string],
  "missingSkills": [string],
  "criticalGaps": [string],
  "improvedResume": string,
  "coverLetter": string,
  "feedback": string
}

RULES:
- NEVER return empty strings
- Always generate improvedResume
- Always generate coverLetter
- Be realistic and recruiter-like
- Be strict with ATS scoring
- Be strict with missingSkills
- Be strict with matchedSkills
- Extract both technical and soft skills
- Use action verbs and measurable impact
- Do not include any explanation outside JSON


Resume:
${resume}

Job:
${job}
`;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0
    });

    let text = response.choices[0].message.content;


    
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed = JSON.parse(text);

    
    parsed.improvedResume =
      parsed.improvedResume && parsed.improvedResume.trim()
        ? parsed.improvedResume
        : generateResumeFallback(resume, job);

    parsed.coverLetter =
      parsed.coverLetter && parsed.coverLetter.trim()
        ? parsed.coverLetter
        : generateCoverLetterFallback(job);

    parsed.matchedSkills = parsed.matchedSkills || [];
    parsed.missingSkills = parsed.missingSkills || [];
    parsed.criticalGaps = parsed.criticalGaps || [];
    parsed.feedback = parsed.feedback || [];

    return parsed;
  } catch (err) {
    console.log("AI FAILED:", err.message);

    return {
      atsScoreSection: {
        totalScore: 0,
        label: "Error",
        summary: "AI processing failed"
      },
      matchedSkills: [],
      missingSkills: [],
      criticalGaps: [],
      feedback:[],
      improvedResume: generateResumeFallback(resume, job),
      coverLetter: generateCoverLetterFallback(job)
    };
  }
};