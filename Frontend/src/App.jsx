import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Register from "./Pages/Register.jsx";
import LandingPage from "./Pages/LandingPage.jsx"
import Home from "./Pages/Home.jsx";
import Features from "./Pages/Features.jsx";
import Working from "./Pages/Working.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Analyze from "./Pages/Analyze.jsx";
import History from "./Pages/History.jsx";
import Insights from "./Pages/Insights.jsx";
import VerifyOtp from "./Pages/Otp.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/working" element={<Working/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/analyze" element={<Analyze/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/insights" element={<Insights/>} />
      <Route path="/verify-otp" element={<VerifyOtp/>} />
       <Route path="/forget-password" element={<ForgetPassword/>} />





    </Routes>
  );
}

export default App;