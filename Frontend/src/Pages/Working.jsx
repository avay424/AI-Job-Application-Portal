import React from "react";
import { Link } from "react-router-dom";

const Working= () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">
          How It Works
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          A simple 3-step process to apply for jobs smarter using AI.
        </p>
      </section>


      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

      
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

  
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-6">
          Join JobAI Pro and land your dream job faster.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Now
        </Link>
      </section>

    </div>
  );
};

export default Working;