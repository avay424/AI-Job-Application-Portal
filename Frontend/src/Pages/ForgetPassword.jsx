import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }
    
    if (!currentPassword.trim()) {
      setError("Current password is required");
      return;
    }
    
    if (!newPassword.trim()) {
      setError("New password is required");
      return;
    }
    
    if (newPassword.length < 5) {
      setError("New password must be at least 5 characters");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }
    
    if (currentPassword === newPassword) {
      setError("New password must be different from current password");
      return;
    }
    
    setLoading(true);
    
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://ai-job-application-portal-8.onrender.com/change-password", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email,
          currentPassword, 
          newPassword,
          confirmPassword
        })
      });
      
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Failed to update password");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4">
      <div className="w-full max-w-md transition-all duration-300 hover:scale-[1.01]">
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer text-2xl">
              🔐
            </div>
            <h1 className="text-2xl text-white font-bold mt-4 transition-colors duration-300 hover:text-blue-400">Change Password</h1>
            <p className="text-gray-400 text-sm text-center mt-2">
              Update your account password
            </p>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-800 rounded-xl p-5 space-y-4">
            
            {success ? (
              <div className="text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-400 font-medium">Password changed successfully!</p>
                <p className="text-gray-400 text-sm">Redirecting to login...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 uppercase">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full px-4 py-2 rounded-lg text-white border border-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 uppercase">Current Password</label>
                  <div className="relative">
                    <input
                      type={showCurrent ? "text" : "password"}
                      className="mt-1 w-full px-4 py-2 pr-10 rounded-lg text-white border border-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600"
                      placeholder="Enter current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 hover:text-blue-300"
                    >
                      {showCurrent ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 uppercase">New Password</label>
                  <div className="relative">
                    <input
                      type={showNew ? "text" : "password"}
                      className="mt-1 text-white w-full px-4 py-2 pr-10 rounded-lg  border border-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600"
                      placeholder="Min 5 characters"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 hover:text-blue-300"
                    >
                      {showNew ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-gray-400 uppercase">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      className="mt-1 w-full px-4 py-2 pr-10 rounded-lg text-white border border-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 hover:text-blue-300"
                    >
                      {showConfirm ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                {error && (
                  <p className="text-red-400 text-xs text-center animate-fadeIn">{error}</p>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className={`inline-flex items-center justify-center gap-2 transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    Update Password
                  </span>
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </button>
              </form>
            )}
            
            <p className="text-sm text-center text-gray-400">
              Remember your password?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-200 hover:underline"
              >
                Back to Login
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`}</style>
    