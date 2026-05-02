import express from "express";
import { sendOtp, verifyOtp,Login } from "../controllers/authController.js";

const authRoutes= express.Router();

authRoutes.post("/send-otp", sendOtp);
authRoutes.post("/verify-otp", verifyOtp);
authRoutes.post("/login", Login);

export default authRoutes;