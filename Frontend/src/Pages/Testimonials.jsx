import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">
          What Users Say
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Real feedback from students and professionals using JobAI Pro.
        </p>
      </section>

      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “JobAI Pro helped me get my first internship within 2 weeks. The AI suggestions are insane!”
            </p>
            <h3 className="font-semibold text-lg">— Rahul Sharma</h3>
            <p className="text-sm text-gray-500">Computer Science Student</p>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “The resume builder and job matching saved me so much time. Highly recommended!”
            </p>
            <h3 className="font-semibold text-lg">— Priya Mehta</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>

  
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">
              “One-click apply feature is a game changer. I applied to 20+ jobs in minutes.”
            </p>
            <h3 className="font-semibold text-lg">— Arjun Verma</h3>
            <p className="text-sm text-gray-500">Final Year Student</p>
          </div>

        </div>
      </section>

      
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Join Thousands of Happy Users
        </h2>
        <p className="text-gray-300 mb-6">
          Start your journey with JobAI Pro today.
        </p>

        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Testimonials;