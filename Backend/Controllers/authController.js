import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import User from "../models/User.js";
import { otpStore } from "../utils/otpStore.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import HistoryModel from "../models/HistoryModel.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

export const sendOtp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Missing fields" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore[email] = {
    otp,
    password,
    expires: Date.now() + 300000
  };

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "OTP",
    text: `Your OTP is ${otp}`
  });

  res.json({ success: true });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const key = email.toLowerCase();
  const data = otpStore[key];

  if (!data) return res.json({ success: false, message: "No OTP" });

  if (String(data.otp) !== String(otp)) {
    return res.json({ success: false, message: "Wrong OTP" });
  }

  if (data.expires < Date.now()) {
    return res.json({ success: false, message: "Expired" });
  }

  const hash = await bcrypt.hash(data.password, 10);

  await User.create({
    email: key,
    password: hash
  });

  delete otpStore[key];

  res.json({ success: true });
};

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ email: Email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }
const token = jwt.sign(
  { email: user.email,},
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);
    res.json({
      success: true,
      message: "Login successful",
    token
    });

    

  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const History = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Email required" });
    }

  
   const history = await HistoryModel.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      result: history
    });

  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};