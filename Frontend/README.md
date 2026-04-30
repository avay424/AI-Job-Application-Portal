# 🚀 AI Powered Job Application System (MERN Stack)

This project is a full-stack web application that allows users to register, login, and manage job-related activities using modern technologies.

---

# 🧱 Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Grok Openai

## Authentication

* JWT (JSON Web Token)
* Password hashing (bcrypt)

---

# 📁 Project Structure

```
  root/
│
├── frontend/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Working.jsx
│   │   │   ├── OTP.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx

├── backend/
│   ├── config/
│   │   ├── db.js
│   ├── models/
│   │   ├── User.js
│   ├── controllers/
│   │   ├── aiController.js
│   ├── Routes/
│   │   ├── aiRoutes.js
│   ├── services/
│   │   ├── aiService.js
│   │   ├── pdfService.js
│   ├── server.js
│   ├── .env
```

---

# ⚙️ SETUP FROM SCRATCH

## 🔹 1. Clone Project

```
git clone <your-repo-link>
cd project-folder
```

---

# 🌐 FRONTEND SETUP

## 🔹 2. Create React App (Vite)

```
cd frontend
npm create vite@latest frontend
npm install
```

## 🔹 3. Install Dependencies

```
npm install react-router-dom
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🔹 4. Configure Tailwind

## vite config.js

<!-- import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
}) -->

## eslint.config.js

<!-- import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
 -->

### index.css

```
@import "tailwindcss";
```

<!-- Starting with the code now -->
## 1.Index.html

<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html> -->

## 2. main.jsx

<!-- import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); -->

## 3. App.jsx

<!-- import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Register from "./Pages/Register.jsx";
import LandingPage from "./Pages/LandingPage.jsx"
import Home from "./Pages/Home.jsx";
import Features from "./Pages/Features.jsx";
import Working from "./Pages/Working.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Otp from "./Pages/Otp.jsx";


function App() {
  return (

ROUTES ARE USED TO REDIRECT TO THAT PAGE
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/working" element={<Working/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/otp" element={<Otp/>} />



    </Routes>
  );
}

export default App;
 -->

<!-- THIS WERE THE CORE THINGS ON WHICH OUR APP RUNS NOW STARTING WITH THE PAGES -->

## 1.LandingPage.jsx

import React from "react";
<!-- Used like anchor tag in react -->
import { Link } from "react-router-dom";
<!-- Used to redirect to next page -->
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    <!-- We use to call usenavigate in a variable to use it in our code -->
    const navigate=useNavigate();
    return (

        <div className="bg-[#0b0b12] text-white min-h-screen">


            <nav className="flex justify-between items-center px-8 py-5">
                <div className="text-xl font-bold flex items-center gap-2">
                    <span className="text-purple-500">⚙</span> JobAI Pro
                </div>
                <div className="text-xl font-bold flex items-center gap-2">
                
                    <Link to="/home" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link to="/features" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Features
                    </Link>
                    <Link to="/working" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        How it works
                    </Link>
                    <Link to="/testimonials" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Testimonials
                    </Link>

                </div>



                <div className="flex justify-between gap-4">
                    <button onClick={()=>navigate("/Login")} className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg ">
                        Login
                    </button>
                    <button onClick={()=>navigate("/register")} className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                        Register
                    </button>
                </div>
            </nav>

<!-- Used grid to show to columns in our ui, md: → applies on medium screens and above (≥ 768px) -->
            <div className="grid md:grid-cols-2 items-center px-8 py-16">


                <div>
                    <p className="text-green-400 text-sm mb-4">
                        AI-Powered Career Assistant
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Land Your Dream Job <br />
                        with{" "}
                        <span className="text-purple-500">
                            AI-Powered Application Assistant
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-lg">
                        Optimize your resume, generate tailored cover letters, match job
                        descriptions, and boost your chances with our advanced AI.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button 
                        onClick={()=>navigate("/dashboard")}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg">
                            Get Started Free
                        </button>

                        <button onClick={()=>navigate("/working")} className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
                            See How It Works
                        </button>
                    </div>
                </div>


                <div className="bg-[#12121c] p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto shadow-xl shadow-indigo-500/70">
                    <div className="bg-white text-black rounded-xl p-6 text-center">
                        <h1 className="my-2">Overall Match Score</h1>


                        <div className="relative w-32 h-32 mx-auto mb-4">

                            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                            <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent rotate-[120deg]"></div>
                            <div className="flex items-center justify-center h-full text-2xl font-bold">
                                85%
                            </div>
                        </div>

                        <p className="text-green-500 font-semibold">Great Match!</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Your profile matches well with this job description.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white text-black rounded-lg p-4 text-sm">
                            <p className="font-semibold mb-2">Top Matching Skills</p>
                            <ul className="text-gray-600 space-y-1">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>

                        <div className="bg-white text-black rounded-lg p-4 text-sm">
                            <p className="font-semibold mb-2">AI Suggestions</p>
                            <ul className="text-gray-600 space-y-1">
                                <li>Add more metrics</li>
                                <li>Highlight achievements</li>
                                <li>Improve resume summary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 px-8 pb-12 text-center">
                {[
                    "AI Resume Review",
                    "Job Match Score",
                    "Cover Letter Generator",
                    "Smart Suggestions",
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#12121c] p-5 rounded-xl border border-gray-800"
                    >
                        <p className="font-semibold">{item}</p>
                        <p className="text-gray-400 text-sm mt-2">
                            Get AI-powered insights instantly.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default LandingPage;


## 2.Login page

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  <!-- Used to change state and update the component -->
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    Email: "",
    password: "",
    Otp:""
  });

<!-- Here field is email and password and value is what is written in that -->
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

  
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [field]: `${field} is required`
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleLogin = async () => {
    setErrors({});

    let newErrors = {};

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         if (!form.Email.trim()) {
    newErrors.Email = "Email is required";
  } else if (!emailPattern.test(form.Email)) {
    newErrors.Email = "Invalid email format";
  }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    }
     if (!form.Otp.trim()) {
      newErrors.Otp = "Otp is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!data.success) {
      if (data.message === "password is wrong") {
        setErrors({ password: "Incorrect password" });
      } else if (data.message === "no users found") {
        setErrors({ username: "User not found" });
      } else {
        setErrors({ general: data.message });
      }
      return;
    }

    
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">

    <div className="
      w-full max-w-md
      bg-gray-900
      border border-gray-800
      rounded-2xl
      shadow-2xl
      p-8
    ">

    
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-xl text-white">🎓</span>
        </div>

        <h1 className="text-2xl font-bold mt-4 text-white">JobAI</h1>
        <p className="text-gray-400 text-sm">Sign in to your account</p>
      </div>

  
      <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 space-y-4">

        <div>
          <label className="text-xs text-gray-400 uppercase">Email</label>
          <input
            className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
              errors.Email? "border-red-500" : "border-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            placeholder="Enter Email"
            value={form.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
          />
          {errors.Email && (
            <p className="text-red-400 text-xs mt-1">{errors.Email}</p>
          )}
        </div>

      
        <div className="relative">
          <label className="text-xs text-gray-400 uppercase">Password</label>
          <input
            className={`mt-1 w-full px-4 py-2 pr-16 rounded-lg bg-gray-900 border ${
              errors.password ? "border-red-500" : "border-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />

          <span
            className="absolute right-3 top-8 text-xs text-blue-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>

          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div>
          <label className="text-xs text-gray-400 uppercase">Otp</label>
          <input
            className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
              errors.Otp? "border-red-500" : "border-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
            placeholder="Enter Otp"
            value={form.Otp}
            onChange={(e) => handleChange("Otp", e.target.value)}
          />
          {errors.Otp && (
            <p className="text-red-400 text-xs mt-1">{errors.Otp}</p>
          )}
        </div>

    
        {errors.general && (
          <p className="text-red-400 text-sm text-center">
            {errors.general}
          </p>
        )}

      
        <button
          onClick={handleLogin}
          className="
            w-full py-2 rounded-lg
            bg-blue-600 hover:bg-blue-700
            text-white
            transition duration-200
            font-semibold
            shadow-md
          "
        >
          Sign In
        </button>

      
        <p
          onClick={() => navigate("/forget-password")}
          className="text-xs text-right text-gray-400 cursor-pointer hover:underline"
        >
          Forgot password?
        </p>

        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>

      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        Your Ai-Powered job assistant is here
      </p>

    </div>
  </div>
);
};


export default Login;

## 3. Register page

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({

    Email:"",
    Password: ""
  
    
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

  

    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [field]: `${field} is required`
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  }

  const handleRegister = async () => {
    setErrors({});
    let newErrors = {};

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         if (!form.Email.trim()) {
    newErrors.Email = "Email is required";
  } else if (!emailPattern.test(form.Email)) {
    newErrors.Email = "Invalid email format";
  }



    if (!form.Password.trim()) {
      newErrors.Password = "Password is required";
    } else if (form.Password.length < 5 || form.Password.length > 10) {
      newErrors.Password = "Password must be 5-10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Registered successfully");
      navigate("/");
    } else {
      alert(data.message);
    }

    navigate("/");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">

      <div className="
        w-full max-w-md
        bg-gray-900
        border border-gray-800
        rounded-2xl
        shadow-2xl
        p-8
      ">

        
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            🎓
          </div>

          <h1 className="text-2xl font-bold mt-4">Create Account</h1>
          <p className="text-gray-400 text-sm">Join JobAI today</p>
        </div>

      
        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 space-y-4">

          
          <div>
            <label className="text-xs text-gray-400 uppercase">
              Email
            </label>

            <input
              className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
                errors.Email? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              placeholder="Enter Email"
              value={form.Email}
              onChange={(e) => handleChange("Email", e.target.value)}
            />

            {errors.Email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.Email}
              </p>
            )}
          </div>

        
          <div className="relative">
            <label className="text-xs text-gray-400 uppercase">
              Password
            </label>

            <input
              className={`mt-1 w-full px-4 py-2 pr-16 rounded-lg bg-gray-900 border ${
                errors.Password ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
              type={showPassword ? "text" : "password"}
              placeholder="Min 5 characters"
              value={form.Password}
              onChange={(e) => handleChange("Password", e.target.value)}
            />

            <span
              className="absolute right-3 top-8 text-xs text-blue-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>

            {errors.Password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.Password}
              </p>
            )}
          </div>

      
          <button
            className="
              w-full py-2 rounded-lg
              bg-blue-600 hover:bg-blue-700
              text-white
              font-semibold
              transition
              shadow-md
            "
            onClick={handleRegister}
          >
            Create Account
          </button>

      
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>

        </div>
      </div>
    </div>
  );
  };


export default Register;

## 4. Dashboard page


import { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {

<!-- If request is already running, stop user from clicking again -->
    if (loading) return;

    if (!file || !job) {
      alert("Please upload resume and enter job description");
      return;
    }

    try {
<!-- show spinner / loading UI -->
      setLoading(true);
<!-- clear previous result -->
      setResult(null);
<!-- We are preparing data to send to backend.

----But why FormData?

Because:

file upload needs special format
normal JSON cannot send files -->
      const formData = new FormData();
<!-- file= resume and job= descripion -->
      formData.append("file", file);
      formData.append("job", job);

      const res = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        body: formData 
      });

      const data = await res.json();

      console.log("BACKEND RESPONSE:", data);

      if (!data.success) {
        alert("Server error");
        return;
      }
<!-- somewhere in backend we are sending response in result so its in data which we r geeting on frontend -->
      setResult({ ...data.result });

    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

    
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-5">
        <h1 className="text-xl font-bold text-blue-500 mb-8">JobAI</h1>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Analyze</li>
          <li className="hover:text-white cursor-pointer">History</li>
          <li className="hover:text-white cursor-pointer">Insights</li>
        </ul>
      </div>

  
      <div className="flex-1 p-8">

        <h2 className="text-3xl font-bold mb-6">
          AI Resume Analyzer
        </h2>

      
        <div className="grid grid-cols-2 gap-6">

    
          <div className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">

            {!file ? (
              <>
                <p className="text-gray-400 mb-2">
                  Upload Resume (PDF/DOCX)
                </p>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
<!-- if bychance user selects multiple files then [0] is used to select the first one only and ignores other -->
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm text-gray-300"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Max size 5MB
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-green-400 font-medium">
                  {file.name}
                </p>

                <button
                  onClick={() => setFile(null)}
                  className="mt-2 text-sm text-red-400 hover:underline"
                >
                  Remove file
                </button>
              </div>
            )}

          </div>

        
          <textarea
            className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste job description..."
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

        </div>


        <button
          onClick={handleAnalyze}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
<!-- when loading show analzing otherwise second one -->
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

  <!--if loading then show this  -->
        {loading && (
          <div className="mt-10 text-center text-blue-400">
            Analyzing Resume...
          </div>
        )}

<!-- when loading is complated and result has come then show this  -->
        {!loading && result && (
          <div className="mt-10 space-y-6">

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-green-400 text-xl font-bold">
<!-- if in result which we set earlier in that there is a section called atsscoresection then go in totalscore in that and then show percentage otherwise show 0% and it also prevents from crash as we set fallback here-->
                ATS Score: {result.atsScoreSection?.totalScore || 0}%
              </h3>

              <p className="text-gray-400 mt-1">
                {result.atsScoreSection?.label || "N/A"}
              </p>

              <p className="text-gray-500 mt-1">
                {result.atsScoreSection?.summary || "No summary"}
              </p>
            </div>

      
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Matched Skills</h3>
              <p className="text-gray-400">
<!-- First go in result and then in section called matched skills if not exits then empty array if exixts then check length > 0 and if true then .join converts it into string from array and renders  nd if not then last part -->
                {(result.matchedSkills || []).length > 0
                  ? result.matchedSkills.join(", ")
                  : "No matched skills found"}
              </p>
            </div>

  
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Missing Skills</h3>
              <p className="text-gray-400">
                {(result.missingSkills || []).length > 0
                  ? result.missingSkills.join(", ")
                  : "No missing skills detected"}
              </p>
            </div>

          
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Critical Gaps</h3>
              <p className="text-gray-400">
                {(result.criticalGaps || []).length > 0
                  ? result.criticalGaps.join(", ")
                  : "No critical gaps"}
              </p>
            </div>

    
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Improved Resume</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.improvedResume || "No improvement generated"}
              </p>
            </div>

  
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Cover Letter</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.coverLetter || "No cover letter generated"}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;


## 5.Features.jsx

import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">
          Powerful Features
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Everything you need to build, manage, and optimize your job applications with AI.
        </p>
      </section>

      
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
            <p className="text-gray-600">
              Create professional resumes instantly using AI-powered suggestions and templates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
            <p className="text-gray-600">
              Get personalized job recommendations based on your skills and profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
            <p className="text-gray-600">
              Apply to multiple jobs instantly without filling forms again and again.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
            <p className="text-gray-600">
              Track all your job applications in one clean dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Cover Letters</h3>
            <p className="text-gray-600">
              Generate personalized cover letters in seconds using AI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Interview Prep</h3>
            <p className="text-gray-600">
              Practice common interview questions with AI feedback.
            </p>
          </div>

        </div>
      </section>

    
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Upgrade Your Career?
        </h2>
        <p className="text-gray-300 mb-6">
          Start using JobAI Pro and land your dream job faster.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Features;


## 6.Testimonial.jsx

import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">
          What Users Say
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Real feedback from students and professionals using JobAI Pro.
        </p>
      </section>

      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “JobAI Pro helped me get my first internship within 2 weeks. The AI suggestions are insane!”
            </p>
            <h3 className="font-semibold text-lg">— Rahul Sharma</h3>
            <p className="text-sm text-gray-500">Computer Science Student</p>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “The resume builder and job matching saved me so much time. Highly recommended!”
            </p>
            <h3 className="font-semibold text-lg">— Priya Mehta</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>

  
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “One-click apply feature is a game changer. I applied to 20+ jobs in minutes.”
            </p>
            <h3 className="font-semibold text-lg">— Arjun Verma</h3>
            <p className="text-sm text-gray-500">Final Year Student</p>
          </div>

        </div>
      </section>

      
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Join Thousands of Happy Users
        </h2>
        <p className="text-gray-300 mb-6">
          Start your journey with JobAI Pro today.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Testimonials;

## 7.Working.jsx

import React from "react";
import { Link } from "react-router-dom";

const Working= () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">
          How It Works
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          A simple 3-step process to apply for jobs smarter using AI.
        </p>
      </section>


      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

      
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
            <p className="text-gray-600">
              Sign up and build your professional profile with skills, education, and experience.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Matches Jobs</h3>
            <p className="text-gray-600">
              Our AI analyzes your profile and suggests the best job opportunities for you.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Apply Instantly</h3>
            <p className="text-gray-600">
              Apply to multiple jobs with one click and track your application status easily.
            </p>
          </div>

        </div>
      </section>

  
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-6">
          Join JobAI Pro and land your dream job faster.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Now
        </Link>
      </section>

    </div>
  );
};

export default Working;

## 8.Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to JobAI Pro
        </h1>

        <p className="text-lg md:text-xl max-w-2xl opacity-90">
          Your AI-powered job application platform that helps you apply smarter, faster, and better.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </Link>

          <Link
            to="/features"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

    
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose JobAI Pro?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
            <p className="text-gray-600">
              Generate professional resumes using AI in seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
            <p className="text-gray-600">
              Get job recommendations based on your skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
            <p className="text-gray-600">
              Apply to multiple jobs instantly with one click.
            </p>
          </div>

        </div>
      </section>


      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Career Journey Today
        </h2>
        <p className="text-gray-300 mb-6">
          Join thousands of students and professionals using JobAI Pro.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </Link>
      </section>

    </div>
  );
};

export default Home;









<!-- This was All for the frontend upto which i build i will updated once its done -->

## 🔹 5. Run Frontend

```
npm run dev
```

---

# 🖥 BACKEND SETUP

## 🔹 6. Initialize Backend

```
mkdir backend
cd backend
npm init -y
```

## 🔹 7. Install Dependencies

```
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
npm install nodemon --save-dev
npm install openai
```

<!-- Go to https://console.groq.com/keys and create api key and paste in .env -->

## 🔹 8. Setup Scripts (package.json)

```
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

# 🗄 DATABASE (MongoDB Atlas)

## 🔹 9. Setup MongoDB Atlas

1. Create cluster
2. Create database user
3. Go to Network Access
4. Add IP:

```
0.0.0.0/0
```

## 🔹 10. Connection String (.env)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_api_key
```

---

# 🔌 BACKEND CORE FILES

## 🔹 db.js

```
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
```

---

## 🔹 User Model

```
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
```

---

## Controllers

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