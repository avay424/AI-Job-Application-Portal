// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     Email: "",
//     Password: ""
//   });

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

//   const handleRegister = async () => {
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
//     } else if (form.Password.length < 5) {
//       newErrors.Password = "Minimum 5 characters";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     const res = await fetch("http://localhost:5000/send-otp", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email: form.Email,
//         password: form.Password
//       })
//     });

//     const data = await res.json();

//     if (data.success) {
//       navigate("/verify-otp", {
//         state: { email: form.Email }
//       });
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">
//       <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">

//         <div className="flex flex-col items-center mb-6">
//           <div className="w-14 h-14 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg">
//             🎓
//           </div>
//           <h1 className="text-2xl font-bold mt-4">Create Account</h1>
//           <p className="text-gray-400 text-sm">Join JobAI today</p>
//         </div>

//         <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 space-y-4">

//           <div>
//             <label className="text-xs text-gray-400 uppercase">Email</label>
//             <input
//               className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
//                 errors.Email ? "border-red-500" : "border-gray-700"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               placeholder="Enter Email"
//               value={form.Email}
//               onChange={(e) => handleChange("Email", e.target.value)}
//             />
//             {errors.Email && (
//               <p className="text-red-400 text-xs mt-1">{errors.Email}</p>
//             )}
//           </div>

//           <div className="relative">
//             <label className="text-xs text-gray-400 uppercase">Password</label>
//             <input
//               className={`mt-1 w-full px-4 py-2 pr-16 rounded-lg bg-gray-900 border ${
//                 errors.Password ? "border-red-500" : "border-gray-700"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               type={showPassword ? "text" : "password"}
//               placeholder="Min 5 characters"
//               value={form.Password}
//               onChange={(e) => handleChange("Password", e.target.value)}
//             />
//             <span
//               className="absolute right-3 top-8 text-xs text-blue-400 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </span>
//             {errors.Password && (
//               <p className="text-red-400 text-xs mt-1">{errors.Password}</p>
//             )}
//           </div>

//           <button
//             className="w-full py-2 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] font-semibold transition"
//             onClick={handleRegister}
//           >
//             Send OTP
//           </button>

//           <p className="text-sm text-center text-gray-400">
//             Already have an account?{" "}
//             <span
//               className="text-blue-400 cursor-pointer hover:underline"
//               onClick={() => navigate("/login")}
//             >
//               Sign in
//             </span>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
    } else if (form.Password.length < 5) {
      newErrors.Password = "Minimum 5 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.Email,
          password: form.Password
        })
      });

      const data = await res.json();

      if (data.success) {
        navigate("/verify-otp", {
          state: { email: form.Email }
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 text-white">
      <div className="w-full max-w-md transition-all duration-300 hover:scale-[1.01]">
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-blue-500/10 hover:border-gray-700">

          <div className="flex flex-col items-center mb-6 transition-all duration-300 hover:transform">
            <div className="w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer text-2xl">
              🎓
            </div>
            <h1 className="text-2xl font-bold mt-4 transition-colors duration-300 hover:text-blue-400">Create Account</h1>
            <p className="text-gray-400 text-sm">Join JobAI today</p>
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
                placeholder="Min 5 characters"
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

            <button
              className="relative w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              onClick={handleRegister}
              disabled={isLoading}
            >
              <span className={`inline-flex items-center justify-center gap-2 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Send OTP
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>

            <p className="text-sm text-center text-gray-400">
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200 hover:underline"
                onClick={() => navigate("/login")}
              >
                Sign in
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;