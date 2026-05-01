import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">

      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20  bg-[#1877F2] hover:bg-[#166FE5] text-white">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to JobAI Pro
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl opacity-90">
          Your AI-powered job application platform that helps you apply smarter, faster, and better.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/login"
            className="px-6 py-3 border border-white  font-semibold rounded-lg  hover:bg-white hover:text-blue-600 shadow-md transition w-full sm:w-auto text-center"
          >
            Get Started
          </Link>

          <Link
            to="/features"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>

      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Why Choose JobAI Pro?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Resume Builder</h3>
            <p className="text-gray-600">
              Generate professional resumes using AI in seconds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
            <p className="text-gray-600">
              Get job recommendations based on your skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
            <p className="text-gray-600">
              Apply to multiple jobs instantly with one click.
            </p>
          </div>

        </div>

      </section>

      <section className="bg-gray-900 text-white text-center py-12 sm:py-16 px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Start Your Career Journey Today
        </h2>

        <p className="text-gray-300 mb-6">
          Join thousands of students and professionals using JobAI Pro.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold transition"
        >
          Create Account
        </Link>

      </section>

    </div>
  );
};

export default Home;