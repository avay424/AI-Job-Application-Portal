import express from "express";
import multer from "multer";
import { analyzeResume } from "../Controllers/aiController.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("file"), analyzeResume);

export default router;
