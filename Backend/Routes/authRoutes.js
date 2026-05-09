import express from "express";
import { sendOtp, verifyOtp,Login,History,ChangePassword} from "../Controllers/authController.js";

const authRoutes= express.Router();

authRoutes.post("/send-otp", sendOtp);
authRoutes.post("/verify-otp", verifyOtp);
authRoutes.post("/login", Login);
authRoutes.post("/history", History);
authRoutes.post("/change-password", ChangePassword);

export default authRoutes;