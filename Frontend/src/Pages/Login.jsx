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

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [form, setForm] = useState({
//     Email: "",
//     Password: ""
//   });

//   // Create floating particles effect
//   useEffect(() => {
//     const particlesContainer = document.createElement('div');
//     particlesContainer.className = 'particles-container';
//     particlesContainer.style.cssText = `
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       pointer-events: none;
//       z-index: 0;
//       overflow: hidden;
//     `;
//     document.body.appendChild(particlesContainer);

//     // Create particles
//     for (let i = 0; i < 50; i++) {
//       const particle = document.createElement('div');
//       const size = Math.random() * 4 + 2;
//       particle.style.cssText = `
//         position: absolute;
//         width: ${size}px;
//         height: ${size}px;
//         background: rgba(24, 119, 242, 0.4);
//         border-radius: 50%;
//         left: ${Math.random() * 100}%;
//         top: ${Math.random() * 100}%;
//         animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
//         animation-delay: ${Math.random() * 5}s;
//       `;
//       particlesContainer.appendChild(particle);
//     }

//     // Add keyframe animation
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes floatParticle {
//         0% {
//           transform: translateY(100vh) rotate(0deg);
//           opacity: 0;
//         }
//         10% {
//           opacity: 0.8;
//         }
//         90% {
//           opacity: 0.8;
//         }
//         100% {
//           transform: translateY(-20vh) rotate(360deg);
//           opacity: 0;
//         }
//       }
//       @keyframes gradientShift {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
//       @keyframes float {
//         0%, 100% { transform: translateY(0px); }
//         50% { transform: translateY(-10px); }
//       }
//       @keyframes pulse {
//         0%, 100% { transform: scale(1); opacity: 0.6; }
//         50% { transform: scale(1.1); opacity: 0.9; }
//       }
//       @keyframes shimmer {
//         0% { transform: translateX(-100%) skewX(-15deg); }
//         100% { transform: translateX(200%) skewX(-15deg); }
//       }
//       @keyframes borderGlow {
//         0% { border-color: rgba(24, 119, 242, 0.3); box-shadow: 0 0 5px rgba(24, 119, 242, 0.2); }
//         100% { border-color: rgba(24, 119, 242, 0.8); box-shadow: 0 0 20px rgba(24, 119, 242, 0.5); }
//       }
//       .animate-fadeInUp {
//         animation: fadeInUp 0.6s ease-out forwards;
//       }
//       .animate-float {
//         animation: float 4s ease-in-out infinite;
//       }
//       .particles-container {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         pointer-events: none;
//         z-index: 0;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       particlesContainer.remove();
//       style.remove();
//     };
//   }, []);

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });

//     if (!value.trim()) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: `${field} is required`
//       }));
//     } else {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: ""
//       }));
//     }
//   };

//   const handleLogin = async () => {
//     setErrors({});

//     let newErrors = {};

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!form.Email.trim()) {
//       newErrors.Email = "Email is required";
//     } else if (!emailPattern.test(form.Email)) {
//       newErrors.Email = "Invalid email format";
//     }

//     if (!form.Password.trim()) {
//       newErrors.Password = "Password is required";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           Email: form.Email,
//           Password: form.Password
//         })
//       });

//       const data = await res.json();
//       if (data.success) {
//         navigate("/dashboard");
//       }

//       if (!data.success) {
//         if (data.message === "password is wrong check") {
//           setErrors({ Password: "Incorrect password" });
//         } else if (data.message === "Not a user") {
//           setErrors({ Email: "User not found" });
//         } else {
//           setErrors({ general: data.message });
//         }
//         return;
//       }
//     } catch (error) {
//       setErrors({ general: "Network error. Please try again." });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-4 text-white relative overflow-hidden">
      
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse" 
//              style={{ animation: 'gradientShift 8s ease infinite', backgroundSize: '200% 200%' }} />
        
//         {/* Floating Orbs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
//              style={{ animation: 'pulse 6s ease-in-out infinite' }} />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
//              style={{ animation: 'pulse 8s ease-in-out infinite 1s' }} />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
//              style={{ animation: 'pulse 10s ease-in-out infinite 2s' }} />
//       </div>

//       {/* Login Card */}
//       <div className="w-full max-w-md relative z-10 animate-fadeInUp">
//         <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 
//                         transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-xl
//                         hover:scale-[1.02] hover:border-blue-500/30">
          
//           {/* Logo Section with Animation */}
//           <div className="flex flex-col items-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg 
//                             transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer animate-float">
//               <span className="text-2xl text-white">🎓</span>
//             </div>

//             <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent
//                            animate-pulse">
//               JobAI
//             </h1>
//             <p className="text-gray-400 text-sm">Sign in to your account</p>
//           </div>

//           <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 space-y-4
//                           transition-all duration-300 hover:border-blue-500/30">
            
//             {/* Email Field with Animation */}
//             <div className="group">
//               <label className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
//                 Email
//               </label>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                   </svg>
//                 </div>
//                 <input
//                   className={`mt-1 w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900/80 border 
//                              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
//                              hover:border-blue-400/50
//                              ${errors.Email ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-blue-500"}`}
//                   placeholder="Enter Email"
//                   value={form.Email}
//                   onChange={(e) => handleChange("Email", e.target.value)}
//                 />
//               </div>
//               {errors.Email && (
//                 <p className="text-red-400 text-xs mt-1 animate-fadeInUp">{errors.Email}</p>
//               )}
//             </div>

//             {/* Password Field with Animation */}
//             <div className="group">
//               <label className="text-xs text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   className={`mt-1 w-full pl-10 pr-16 py-2.5 rounded-lg bg-gray-900/80 border 
//                              transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
//                              hover:border-blue-400/50
//                              ${errors.Password ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-blue-500"}`}
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter password"
//                   value={form.Password}
//                   onChange={(e) => handleChange("Password", e.target.value)}
//                 />

//                 <span
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 cursor-pointer 
//                              hover:text-blue-300 transition-colors select-none font-semibold"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </span>
//               </div>
//               {errors.Password && (
//                 <p className="text-red-400 text-xs mt-1 animate-fadeInUp">{errors.Password}</p>
//               )}
//             </div>

//             {/* General Error */}
//             {errors.general && (
//               <p className="text-red-400 text-sm text-center animate-fadeInUp">
//                 {errors.general}
//               </p>
//             )}

//             {/* Sign In Button with Loading Animation */}
//             <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               className="relative w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
//                          hover:from-blue-500 hover:to-purple-500 font-semibold transition-all duration-300
//                          transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/30
//                          disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
//             >
//               <span className={`inline-flex items-center justify-center gap-2 transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
//                 </svg>
//                 Sign In
//               </span>
//               {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 </div>
//               )}
//               {/* Shimmer effect on hover */}
//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 
//                             bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//             </button>

//             {/* Forgot Password Link */}
//             <p
//               onClick={() => navigate("/forget-password")}
//               className="text-xs text-right text-gray-400 cursor-pointer hover:text-blue-400 
//                          transition-colors hover:underline transform hover:translate-x-1 duration-200"
//             >
//               Forgot password?
//             </p>

//             {/* Register Link */}
//             <p className="text-sm text-center text-gray-400">
//               Don’t have an account?{" "}
//               <span
//                 onClick={() => navigate("/register")}
//                 className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors 
//                            hover:underline font-medium inline-block hover:scale-105 duration-200"
//               >
//                 Register here
//               </span>
//             </p>

//           </div>

//           <p className="text-center text-xs text-gray-500 mt-6 animate-pulse">
//             Your AI-Powered job assistant is here
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;