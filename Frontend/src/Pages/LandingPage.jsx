

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (

        <div className="bg-[#0b0b12] text-white min-h-screen">

            <nav className="flex justify-between items-center px-8 py-5">
                <div className="text-xl font-bold flex items-center gap-2">
                    <span className="text-purple-500">⚙</span> JobAI Pro
                </div>
                <div className="text-xl font-bold flex items-center gap-2">
                    <Link to="/home" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link to="/features" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Features
                    </Link>
                    <Link to="/working" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        How it works
                    </Link>
                    <Link to="/testimonials" className="relative text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-1 transition duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full">
                        Testimonials
                    </Link>

                </div>




                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                    Login
                </button>
            </nav>


            <div className="grid md:grid-cols-2 items-center px-8 py-16">


                <div>
                    <p className="text-green-400 text-sm mb-4">
                        AI-Powered Career Assistant
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Land Your Dream Job <br />
                        with{" "}
                        <span className="text-purple-500">
                            AI-Powered Application Assistant
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-lg">
                        Optimize your resume, generate tailored cover letters, match job
                        descriptions, and boost your chances with our advanced AI.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg">
                            Get Started Free
                        </button>

                        <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
                            See How It Works
                        </button>
                    </div>
                </div>


                <div className="bg-[#12121c] p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
                    <div className="bg-white text-black rounded-xl p-6 text-center">
                        <h1 className="my-2">Overall Match Score</h1>


                        <div className="relative w-32 h-32 mx-auto mb-4">

                            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                            <div className="absolute inset-0 rounded-full border-8 border-green-400 border-t-transparent rotate-[120deg]"></div>
                            <div className="flex items-center justify-center h-full text-2xl font-bold">
                                85%
                            </div>
                        </div>

                        <p className="text-green-500 font-semibold">Great Match!</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Your profile matches well with this job description.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white text-black rounded-lg p-4 text-sm">
                            <p className="font-semibold mb-2">Top Matching Skills</p>
                            <ul className="text-gray-600 space-y-1">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>

                        <div className="bg-white text-black rounded-lg p-4 text-sm">
                            <p className="font-semibold mb-2">AI Suggestions</p>
                            <ul className="text-gray-600 space-y-1">
                                <li>Add more metrics</li>
                                <li>Highlight achievements</li>
                                <li>Improve resume summary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 px-8 pb-12 text-center">
                {[
                    "AI Resume Review",
                    "Job Match Score",
                    "Cover Letter Generator",
                    "Smart Suggestions",
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#12121c] p-5 rounded-xl border border-gray-800"
                    >
                        <p className="font-semibold">{item}</p>
                        <p className="text-gray-400 text-sm mt-2">
                            Get AI-powered insights instantly.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default LandingPage;