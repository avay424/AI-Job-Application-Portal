// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="bg-[#0b0b12] text-white min-h-screen w-full overflow-x-hidden">

//             <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-5 gap-4 sm:gap-0">
//                 <div className="text-xl font-bold flex items-center gap-2">
//                     <span className="text-purple-500">⚙</span> JobAI Pro
//                 </div>

//                 <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-center">
//                     <Link to="/home" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Home
//                     </Link>
//                     <Link to="/features" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Features
//                     </Link>
//                     <Link to="/working" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         How it works
//                     </Link>
//                     <Link to="/testimonials" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Testimonials
//                     </Link>
//                 </div>

//                 <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
//                     <button onClick={() => navigate("/Login")} className=" bg-[#1877F2] hover:bg-[#166FE5] px-4 py-2 rounded-lg w-full sm:w-auto">
//                         Login
//                     </button>
//                     <button onClick={() => navigate("/register")} className=" bg-[#1877F2] hover:bg-[#166FE5] px-4 py-2 rounded-lg w-full sm:w-auto">
//                         Register
//                     </button>
//                 </div>
//             </nav>

//             <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-8 py-10 sm:py-16 gap-10">

//                 <div className="text-center md:text-left">
//                     <p className="text-green-400 text-sm mb-4">
//                         AI-Powered Career Assistant
//                     </p>

//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//                         Land Your Dream Job <br />
//                         with{" "}
//                         <span className=" text-blue-400">
//                             AI-Powered Application Assistant
//                         </span>
//                     </h1>

//                     <p className="text-gray-400 mt-6 max-w-lg mx-auto md:mx-0">
//                         Optimize your resume, generate tailored cover letters, match job
//                         descriptions, and boost your chances with our advanced AI.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
//                         <button
//                             onClick={() => navigate("/dashboard")}
//                             className=" bg-[#1877F2] hover:bg-[#166FE5] px-6 py-3 rounded-lg w-full sm:w-auto"
//                         >
//                             Get Started Free
//                         </button>

//                         <button
//                             onClick={() => navigate("/working")}
//                             className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 w-full sm:w-auto"
//                         >
//                             See How It Works
//                         </button>
//                     </div>
//                 </div>

//                 <div className="bg-[#12121c] p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto shadow-xl shadow-[#1877F2]/70">

//                     <div className="bg-white text-black rounded-xl p-6 text-center">
//                         <h1 className="my-2">Overall Match Score</h1>

//                         <div className="relative w-28 sm:w-32 h-28 sm:h-32 mx-auto mb-4">
//                             <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
//                             <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent rotate-[120deg]"></div>
//                             <div className="flex items-center justify-center h-full text-xl sm:text-2xl font-bold">
//                                 85%
//                             </div>
//                         </div>

//                         <p className="text-green-500 font-semibold">Great Match!</p>
//                         <p className="text-sm text-gray-500 mt-2">
//                             Your profile matches well with this job description.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

//                         <div className="bg-white text-black rounded-lg p-4 text-sm">
//                             <p className="font-semibold mb-2">Top Matching Skills</p>
//                             <ul className="text-gray-600 space-y-1">
//                                 <li>JavaScript</li>
//                                 <li>React</li>
//                                 <li>Node.js</li>
//                                 <li>MongoDB</li>
//                             </ul>
//                         </div>

//                         <div className="bg-white text-black rounded-lg p-4 text-sm">
//                             <p className="font-semibold mb-2">AI Suggestions</p>
//                             <ul className="text-gray-600 space-y-1">
//                                 <li>Add more metrics</li>
//                                 <li>Highlight achievements</li>
//                                 <li>Improve resume summary</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 pb-12 text-center">

//                 {[
//                     "AI Resume Review",
//                     "Job Match Score",
//                     "Cover Letter Generator",
//                     "Smart Suggestions",
//                 ].map((item, i) => (
//                     <div
//                         key={i}
//                         className="bg-[#12121c] p-5 rounded-xl border border-gray-800"
//                     >
//                         <p className="font-semibold">{item}</p>
//                         <p className="text-gray-400 text-sm mt-2">
//                             Get AI-powered insights instantly.
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LandingPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#070710] text-white w-full overflow-x-hidden">

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,119,242,0.15),transparent_50%)]"></div>

//       <nav className="relative flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-6 gap-4 sm:gap-0 border-b border-gray-800/40 backdrop-blur-xl">

//         <div className="text-xl font-bold flex items-center gap-2">
//           <span className="text-[#1877F2]">⚙</span> JobAI Pro
//         </div>

//         <div className="flex flex-wrap justify-center gap-5 text-sm sm:text-base text-gray-300">
//            <Link to="/home" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Home
//                     </Link>
//                     <Link to="/features" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Features
//                     </Link>
//                     <Link to="/working" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         How it works
//                     </Link>
//                     <Link to="/testimonials" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
//                         Testimonials
//                     </Link>
//         </div>

//         <div className="flex gap-3">
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-[#1877F2] hover:bg-[#166FE5] px-5 py-2 rounded-lg shadow-md hover:shadow-[#1877F2]/30 transition"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/register")}
//             className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition"
//           >
//             Register
//           </button>
//         </div>

//       </nav>

//       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-12 py-20 gap-12">

//         <div>

//           <p className="text-[#1877F2] text-sm mb-4 tracking-widest">
//             AI CAREER PLATFORM
//           </p>

//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Land Your Dream Job with{" "}
//             <span className="text-[#1877F2]">
//               AI Intelligence
//             </span>
//           </h1>

//           <p className="text-gray-400 mt-6 max-w-lg">
//             Optimize your resume, generate cover letters, and match jobs instantly using AI-powered analysis built for modern careers.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <button
//               onClick={() => navigate("/dashboard")}
//               className="bg-[#1877F2] hover:bg-[#166FE5] px-6 py-3 rounded-lg shadow-lg hover:shadow-[#1877F2]/40 transition"
//             >
//               Get Started Free
//             </button>

//             <button
//               onClick={() => navigate("/working")}
//               className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
//             >
//               See How It Works
//             </button>
//           </div>

//         </div>

//         <div className="bg-[#12121c] p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto shadow-xl shadow-[#1877F2]/70">

//                     <div className="bg-white text-black rounded-xl p-6 text-center">
//                         <h1 className="my-2">Overall Match Score</h1>

//                         <div className="relative w-28 sm:w-32 h-28 sm:h-32 mx-auto mb-4">
//                             <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
//                             <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent rotate-[120deg]"></div>
//                             <div className="flex items-center justify-center h-full text-xl sm:text-2xl font-bold">
//                                 85%
//                             </div>
//                         </div>

//                         <p className="text-green-500 font-semibold">Great Match!</p>
//                         <p className="text-sm text-gray-500 mt-2">
//                             Your profile matches well with this job description.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

//                         <div className="bg-white text-black rounded-lg p-4 text-sm">
//                             <p className="font-semibold mb-2">Top Matching Skills</p>
//                             <ul className="text-gray-600 space-y-1">
//                                 <li>JavaScript</li>
//                                 <li>React</li>
//                                 <li>Node.js</li>
//                                 <li>MongoDB</li>
//                             </ul>
//                         </div>

//                         <div className="bg-white text-black rounded-lg p-4 text-sm">
//                             <p className="font-semibold mb-2">AI Suggestions</p>
//                             <ul className="text-gray-600 space-y-1">
//                                 <li>Add more metrics</li>
//                                 <li>Highlight achievements</li>
//                                 <li>Improve resume summary</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-12 pb-16">

//         {[
//           "AI Resume Review",
//           "Job Match Score",
//           "Cover Letter Generator",
//           "Smart Suggestions",
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-[#0f0f1a] p-6 rounded-xl border border-gray-800 hover:border-[#1877F2] transition"
//           >
//             <p className="font-semibold">{item}</p>
//             <p className="text-gray-400 text-sm mt-2">
//               AI-powered insights for your career growth.
//             </p>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070710] text-white w-full overflow-x-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,119,242,0.15),transparent_50%)]"></div>

      <nav className="relative flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-6 gap-4 sm:gap-0 border-b border-gray-800/40 backdrop-blur-xl transition-all duration-300 hover:backdrop-blur-2xl">

        <div className="text-xl font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <span className="text-[#1877F2] transition-all duration-300 hover:rotate-12 inline-block">⚙</span> JobAI Pro
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm sm:text-base text-gray-300">
           <Link to="/home" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link to="/features" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Features
                    </Link>
                    <Link to="/working" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        How it works
                    </Link>
                    <Link to="/testimonials" className="relative text-white text-sm sm:text-base font-medium px-2 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Testimonials
                    </Link>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#1877F2] hover:bg-[#166FE5] px-5 py-2 rounded-lg shadow-md hover:shadow-[#1877F2]/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Register
          </button>
        </div>

      </nav>

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-12 py-20 gap-12">

        <div className="transition-all duration-500 hover:translate-x-2">
          <p className="text-[#1877F2] text-sm mb-4 tracking-widest transition-all duration-300 hover:tracking-wider">
            AI CAREER PLATFORM
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight transition-all duration-300 hover:scale-[1.02] origin-left">
            Land Your Dream Job with{" "}
            <span className="text-[#1877F2] transition-all duration-300 hover:text-blue-400">
              AI Intelligence
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg transition-all duration-300 hover:text-gray-300">
            Optimize your resume, generate cover letters, and match jobs instantly using AI-powered analysis built for modern careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-[#1877F2] hover:bg-[#166FE5] px-6 py-3 rounded-lg shadow-lg hover:shadow-[#1877F2]/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/working")}
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:border-gray-600"
            >
              See How It Works
            </button>
          </div>

        </div>

        <div className="bg-[#12121c] p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto shadow-xl shadow-[#1877F2]/70 transition-all duration-300 hover:shadow-[#1877F2]/90 hover:scale-[1.02]">

                    <div className="bg-white text-black rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg">
                        <h1 className="my-2">Overall Match Score</h1>

                        <div className="relative w-28 sm:w-32 h-28 sm:h-32 mx-auto mb-4 transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                            <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent rotate-[120deg] transition-all duration-500 hover:rotate-[180deg]"></div>
                            <div className="flex items-center justify-center h-full text-xl sm:text-2xl font-bold">
                                85%
                            </div>
                        </div>

                        <p className="text-green-500 font-semibold transition-all duration-300 hover:text-green-600">Great Match!</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Your profile matches well with this job description.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                        <div className="bg-white text-black rounded-lg p-4 text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                            <p className="font-semibold mb-2">Top Matching Skills</p>
                            <ul className="text-gray-600 space-y-1">
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">JavaScript</li>
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">React</li>
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">Node.js</li>
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">MongoDB</li>
                            </ul>
                        </div>

                        <div className="bg-white text-black rounded-lg p-4 text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                            <p className="font-semibold mb-2">AI Suggestions</p>
                            <ul className="text-gray-600 space-y-1">
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">Add more metrics</li>
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">Highlight achievements</li>
                                <li className="transition-all duration-200 hover:translate-x-1 hover:text-gray-900">Improve resume summary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-12 pb-16">

        {[
          "AI Resume Review",
          "Job Match Score",
          "Cover Letter Generator",
          "Smart Suggestions",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#0f0f1a] p-6 rounded-xl border border-gray-800 hover:border-[#1877F2] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1877F2]/20 cursor-pointer"
          >
            <p className="font-semibold transition-all duration-300 group-hover:text-blue-400">{item}</p>
            <p className="text-gray-400 text-sm mt-2">
              AI-powered insights for your career growth.
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default LandingPage;