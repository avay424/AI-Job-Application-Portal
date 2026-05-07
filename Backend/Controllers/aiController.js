
import { extractText } from "../Services/pdfServices.js";
import { analyzeWithAI } from "../Services/aiServices.js";
import HistoryModel from "../Models/HistoryModel.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    const job = req.body.job;

    const resumeText = await extractText(req.file.buffer);

    const result = await analyzeWithAI(resumeText, job);

  
    await HistoryModel.create({
      job,
      atsScoreSection: result.atsScoreSection,
      feedback: result.feedback,
      matchedSkills: result.matchedSkills,
      missingSkills: result.missingSkills,
      improvedResume: result.improvedResume
    });

  
    res.json({
      success: true,
      result
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};