import React from "react";
import { Link } from "react-router-dom";

const Working = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">

      <section className=" bg-[#1877F2] hover:bg-[#166FE5] text-white text-center py-12 sm:py-16 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          How It Works
        </h1>
        <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
          A simple 3-step process to apply for jobs smarter using AI.
        </p>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
            <p className="text-gray-600">
              Sign up and build your professional profile with skills, education, and experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Matches Jobs</h3>
            <p className="text-gray-600">
              Our AI analyzes your profile and suggests the best job opportunities for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Apply Instantly</h3>
            <p className="text-gray-600">
              Apply to multiple jobs with one click and track your application status easily.
            </p>
          </div>

        </div>

      </section>

      <section className="bg-gray-900 text-white text-center py-12 sm:py-16 px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-300 mb-6">
          Join JobAI Pro and land your dream job faster.
        </p>

        <Link
          to="/register"
          className="px-6 py-3  bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold transition"
        >
          Start Now
        </Link>

      </section>

    </div>
  );
};

export default Working;