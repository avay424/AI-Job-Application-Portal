import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./Routes/aiRoutes.js";

dotenv.config();
connectDB();
console.log("db connected")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", router);

app.get("/", (req, res) => {
  res.send("AI Job Portal Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});