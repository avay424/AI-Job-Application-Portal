// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const VerifyOtp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const email = location.state?.email || "";

//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");

//   const handleVerify = async () => {
//     setError("");

//     if (!otp.trim()) {
//       setError("Otp is required");
//       return;
//     }

//     const res = await fetch("http://localhost:5000/verify-otp", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         otp
//       })
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Account created successfully");
//       navigate("/login");
//     } else {
//       setError(data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">

//       <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">

//         <div className="flex flex-col items-center mb-6">
//           <div className="w-14 h-14 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg">
//             🔐
//           </div>
//           <h1 className="text-2xl font-bold mt-4">Verify OTP</h1>
//           <p className="text-gray-400 text-sm text-center">
//             Enter the OTP sent to your email
//           </p>
//         </div>

//         <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 space-y-4">

//           <div>
//             <label className="text-xs text-gray-400 uppercase">OTP</label>
//             <input
//               className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
//                 error ? "border-red-500" : "border-gray-700"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             {error && (
//               <p className="text-red-400 text-xs mt-1">{error}</p>
//             )}
//           </div>

//           <button
//             onClick={handleVerify}
//             className="w-full py-2 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] font-semibold transition"
//           >
//             Verify OTP
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setError("");

    if (!otp.trim()) {
      setError("Otp is required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          otp
        })
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created successfully");
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Network error. Please try again.");
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
              🔐
            </div>
            <h1 className="text-2xl font-bold mt-4 transition-colors duration-300 hover:text-blue-400">Verify OTP</h1>
            <p className="text-gray-400 text-sm text-center">
              Enter the OTP sent to your email
            </p>
          </div>

          <div className="bg-gray-800/40 border border-gray-800 rounded-xl p-5 space-y-4">

            <div>
              <label className="text-xs text-gray-400 uppercase transition-colors duration-200 focus-within:text-blue-400">OTP</label>
              <input
                className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600 ${error ? "border-red-500" : "border-gray-700"}`}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {error && (
                <p className="text-red-400 text-xs mt-1 transition-all duration-200">{error}</p>
              )}
            </div>

            <button
              onClick={handleVerify}
              disabled={isLoading}
              className="relative w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className={`inline-flex items-center justify-center gap-2 transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Verify OTP
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;