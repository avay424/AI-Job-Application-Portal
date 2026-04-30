import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    Email: "",
    password: "",
    Otp:""
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