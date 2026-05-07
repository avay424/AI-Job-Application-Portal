import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  email: String,
  job: String,
  atsScoreSection: Object,
  feedback: String,
  improvedResume:String,
  matchedSkills:[String],
  missingSkills:[String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("History", historySchema);