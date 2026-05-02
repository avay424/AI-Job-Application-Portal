// import React from "react";
// import { Link } from "react-router-dom";

// const Features = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">

//       <section className=" bg-[#1877F2] hover:bg-[#166FE5] text-white text-center py-12 sm:py-16 px-4 sm:px-6">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-3">
//           Powerful Features
//         </h1>
//         <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
//           Everything you need to build, manage, and optimize your job applications with AI.
//         </p>
//       </section>

//       <section className="py-12 sm:py-16 px-4 sm:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
//             <p className="text-gray-600">
//               Create professional resumes instantly using AI-powered suggestions and templates.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
//             <p className="text-gray-600">
//               Get personalized job recommendations based on your skills and profile.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
//             <p className="text-gray-600">
//               Apply to multiple jobs instantly without filling forms again and again.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
//             <p className="text-gray-600">
//               Track all your job applications in one clean dashboard.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">AI Cover Letters</h3>
//             <p className="text-gray-600">
//               Generate personalized cover letters in seconds using AI.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold mb-2">Interview Prep</h3>
//             <p className="text-gray-600">
//               Practice common interview questions with AI feedback.
//             </p>
//           </div>

//         </div>
//       </section>

//       <section className="bg-gray-900 text-white text-center py-12 sm:py-16 px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//           Ready to Upgrade Your Career?
//         </h2>
//         <p className="text-gray-300 mb-6">
//           Start using JobAI Pro and land your dream job faster.
//         </p>

//         <Link
//           to="/register"
//           className="px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold transition"
//         >
//           Get Started
//         </Link>
//       </section>

//     </div>
//   );
// };

// export default Features;

import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">

      <section className="bg-[#1877F2] hover:bg-[#166FE5] text-white text-center py-12 sm:py-16 px-4 sm:px-6 transition-all duration-500">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 transition-all duration-300 hover:scale-105">
          Powerful Features
        </h1>
        <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto transition-all duration-300 hover:opacity-100">
          Everything you need to build, manage, and optimize your job applications with AI.
        </p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">AI Resume Builder</h3>
            <p className="text-gray-600">
              Create professional resumes instantly using AI-powered suggestions and templates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">Smart Job Matching</h3>
            <p className="text-gray-600">
              Get personalized job recommendations based on your skills and profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">One-Click Apply</h3>
            <p className="text-gray-600">
              Apply to multiple jobs instantly without filling forms again and again.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">Application Tracking</h3>
            <p className="text-gray-600">
              Track all your job applications in one clean dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">AI Cover Letters</h3>
            <p className="text-gray-600">
              Generate personalized cover letters in seconds using AI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#1877F2]">Interview Prep</h3>
            <p className="text-gray-600">
              Practice common interview questions with AI feedback.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-900 text-white text-center py-12 sm:py-16 px-4 sm:px-6 transition-all duration-300 hover:bg-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition-all duration-300 hover:scale-105">
          Ready to Upgrade Your Career?
        </h2>
        <p className="text-gray-300 mb-6 transition-all duration-300 hover:text-gray-200">
          Start using JobAI Pro and land your dream job faster.
        </p>

        <Link
          to="/register"
          className="inline-block px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Features;