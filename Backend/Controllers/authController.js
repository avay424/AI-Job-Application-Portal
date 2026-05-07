import bcrypt from "bcrypt";
// import nodemailer from "nodemailer";
import User from "../Models/User.js";
import { otpStore } from "../Utils/otpStore.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import HistoryModel from "../Models/HistoryModel.js";
import { Resend } from "resend";

dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS
//   }
// });
// const transporter = nodemailer.createTransport({
//   // service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS
//   },
//     tls: {
//     rejectUnauthorized: false
//   }
// });


// export const sendOtp = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.json({ success: false, message: "Missing fields" });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000);

//   otpStore[email] = {
//     otp,
//     password,
//     expires: Date.now() + 300000
//   };

//   await transporter.sendMail({
//     from: process.env.EMAIL,
//     to: email,
//     subject: "OTP",
//     text: `Your OTP is ${otp}`
//   });

//   res.json({ success: true });
// };
// export const sendOtp = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.json({ success: false, message: "Missing fields" });
//     }

//     const key = email.toLowerCase();

//     const otp = Math.floor(100000 + Math.random() * 900000);

//     otpStore[key] = {
//       otp,
//       password,
//       expires: Date.now() + 300000
//     };

//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: email,
//       subject: "OTP",
//       text: `Your OTP is ${otp}`
//     });

//     return res.json({ success: true });

//   } catch (err) {
//     console.log(err);
//     return res.json({ success: false, message: "Email sending failed" });
//   }
// };


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "Missing fields" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    otpStore[email.toLowerCase()] = {
      otp,
      password,
      expires: Date.now() + 300000
    };

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP",
      html: `<h2>Your OTP is: ${otp}</h2>`
    });

    return res.json({ success: true });

  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: "OTP send failed" });
  }
};
// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   const key = email.toLowerCase();
//   const data = otpStore[key];

//   if (!data) return res.json({ success: false, message: "No OTP" });

//   if (String(data.otp) !== String(otp)) {
//     return res.json({ success: false, message: "Wrong OTP" });
//   }

//   if (data.expires < Date.now()) {
//     return res.json({ success: false, message: "Expired" });
//   }

//   const hash = await bcrypt.hash(data.password, 10);

//   await User.create({
//     email: key,
//     password: hash
//   });

//   delete otpStore[key];

//   res.json({ success: true });
// };
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

  return res.json({ success: true });
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