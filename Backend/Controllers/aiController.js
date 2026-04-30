
import { extractText } from "../Services/pdfServices.js";
import { analyzeWithAI } from "../Services/aiServices.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    const job = req.body.job;

    const resumeText = await extractText(req.file.buffer);

    const result = await analyzeWithAI(resumeText, job);

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