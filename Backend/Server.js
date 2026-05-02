import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./Routes/aiRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
connectDB();
console.log("db connected")
dotenv.config();
 const PORT=process.env.PORT

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", router);
app.use("/", authRoutes);


app.get("/", (req, res) => {
  res.send("AI Job Portal Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});