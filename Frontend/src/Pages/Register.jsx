import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 text-white">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">

        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-[#1877F2] hover:bg-[#166FE5] rounded-xl flex items-center justify-center shadow-lg">
            🎓
          </div>

          <h1 className="text-2xl font-bold mt-4">Create Account</h1>
          <p className="text-gray-400 text-sm">Join JobAI today</p>
        </div>

        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 space-y-4">

          <div>
            <label className="text-xs text-gray-400 uppercase">Email</label>

            <input
              className={`mt-1 w-full px-4 py-2 rounded-lg bg-gray-900 border ${
                errors.Email ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
                errors.Password ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              <p className="text-red-400 text-xs mt-1">{errors.Password}</p>
            )}
          </div>

          <button
            className="w-full py-2 rounded-lg bg-[#1877F2] hover:bg-[#166FE5]  font-semibold transition"
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