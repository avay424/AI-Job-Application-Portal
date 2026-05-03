import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    Email: "",
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

    if (!form.Password.trim()) {
      newErrors.Password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Email: form.Email,
          Password: form.Password
        })
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token",data.token)
        navigate("/dashboard");
      }

      if (!data.success) {
        if (data.message === "password is wrong check") {
          setErrors({ Password: "Incorrect password" });
        } else if (data.message === "Not a user") {
          setErrors({ Email: "User not found" });
        } else {
          setErrors({ general: data.message });
        }
        return;
      }
    } catch (error) {
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 text-white">
      <div className="w-full max-w-md transition-all duration-300 hover:scale-[1.01]">
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-blue-500/10 hover:border-gray-700">
          
          <div className="flex flex-col items-center mb-6 transition-all duration-300 hover:transform">
            <div className="w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
              <span className="text-xl text-white">🎓</span>
            </div>

            <h1 className="text-2xl font-bold mt-4 transition-colors duration-300 hover:text-blue-400">JobAI</h1>
            <p className="text-gray-400 text-sm">Sign in to your account</p>
          </div>

          <div className="bg-gray-800/40 border border-gray-800 rounded-xl p-5 space-y-4">
            
            <div>
              <label className="text-xs text-gray-400 uppercase transition-colors duration-200 focus-within:text-blue-400">Email</label>
              <input
                className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600 ${errors.Email ? "border-red-500" : "border-gray-700"}`}
                placeholder="Enter Email"
                value={form.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
              />
              {errors.Email && (
                <p className="text-red-400 text-xs mt-1 transition-all duration-200">{errors.Email}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-xs text-gray-400 uppercase transition-colors duration-200 focus-within:text-blue-400">Password</label>
              <input
                className={`mt-1 w-full px-4 py-2 pr-16 rounded-lg bg-gray-900 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600 ${errors.Password ? "border-red-500" : "border-gray-700"}`}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.Password}
                onChange={(e) => handleChange("Password", e.target.value)}
              />

              <span
                className="absolute right-3 top-8 text-xs text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>

              {errors.Password && (
                <p className="text-red-400 text-xs mt-1 transition-all duration-200">{errors.Password}</p>
              )}
            </div>

            {errors.general && (
              <p className="text-red-400 text-sm text-center transition-all duration-200">
                {errors.general}
              </p>
            )}

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="relative w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className={`inline-flex items-center justify-center gap-2 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Sign In
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>

            <p
              onClick={() => navigate("/forget-password")}
              className="text-xs text-right text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-200 hover:underline"
            >
              Forgot password?
            </p>

            <p className="text-sm text-center text-gray-400">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200 hover:underline"
              >
                Register here
              </span>
            </p>

          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            Your AI-Powered job assistant is here
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;

