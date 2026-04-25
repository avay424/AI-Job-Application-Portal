import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Register from "./Pages/Register.jsx";
import LandingPage from "./Pages/LandingPage.jsx"
import Home from "./Pages/Home.jsx";
import Features from "./Pages/Features.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/features" element={<Features />} />

    </Routes>
  );
}

export default App;