import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

connectDB();

dotenv.config();
const PORT=process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});