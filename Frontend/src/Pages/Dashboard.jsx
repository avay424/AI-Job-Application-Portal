// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const [file, setFile] = useState(null);
//   const [job, setJob] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleAnalyze = async () => {
//     if (loading) return;

//     if (!file || !job) {
//       alert("Please upload resume and enter job description");
//       return;
//     }

//     try {
//       setLoading(true);
//       setResult(null);

//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("job", job);

//       const res = await fetch("http://localhost:5000/api/ai/analyze", {
//         method: "POST",
//         body: formData
//       });

//       const data = await res.json();

//       if (!data.success) {
//         alert("Server error");
//         return;
//       }

//       setResult({ ...data.result });

//     } catch (err) {
//       console.log(err);
//       alert("Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white w-full overflow-x-hidden">

//       <div className="w-full md:w-64 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-5 flex flex-col">

//         <h1 className="text-xl font-bold text-blue-400 mb-4 md:mb-6">
//           JobAI
//         </h1>

//         <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">

//           <Link to="/dashboard"  className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition">
//             Dashboard
//           </Link>

//           <Link to="/analyze" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition">
//            Analyze
//           </Link>

//           <Link to="/history" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition">
//             History
//           </Link>

//           <Link to="/insights" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition">
//             Insights
//           </Link>

//         </div>
//       </div>

//       <div className="flex-1 p-4 md:p-8">

//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           AI Resume Analyzer
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           <div className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">

//             {!file ? (
//               <>
//                 <p className="text-gray-400 mb-2">
//                   Upload Resume (PDF/DOCX)
//                 </p>

//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   className="text-sm text-gray-300"
//                 />

//                 <p className="text-xs text-gray-500 mt-2">
//                   Max size 5MB
//                 </p>
//               </>
//             ) : (
//               <div className="flex flex-col items-center">
//                 <p className="text-green-400 font-medium break-all">
//                   {file.name}
//                 </p>

//                 <button
//                   onClick={() => setFile(null)}
//                   className="mt-2 text-sm text-red-400 hover:underline"
//                 >
//                   Remove file
//                 </button>
//               </div>
//             )}

//           </div>

//           <textarea
//             className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Paste job description..."
//             value={job}
//             onChange={(e) => setJob(e.target.value)}
//           />

//         </div>

//         <button
//           onClick={handleAnalyze}
//           className="mt-6 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold w-full md:w-auto"
//         >
//           {loading ? "Analyzing..." : "Analyze Resume"}
//         </button>

//         {loading && (
//           <div className="mt-10 text-center text-blue-400">
//             Analyzing Resume...
//           </div>
//         )}

//         {!loading && result && (
//           <div className="mt-10 space-y-6">

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="text-green-400 text-xl font-bold">
//                 ATS Score: {result.atsScoreSection?.totalScore || 0}%
//               </h3>

//               <p className="text-gray-400 mt-1">
//                 {result.atsScoreSection?.label || "N/A"}
//               </p>

//               <p className="text-gray-500 mt-1">
//                 {result.atsScoreSection?.summary || "No summary"}
//               </p>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Matched Skills</h3>
//               <ul className="text-gray-400 list-disc list-inside space-y-1">
//                 {(result.matchedSkills || []).map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Missing Skills</h3>
//               <ul className="text-gray-400 list-disc list-inside space-y-1">
//                 {(result.missingSkills || []).map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Critical Gaps</h3>
//               <p className="text-gray-400">
//                 {(result.criticalGaps || []).join(", ") || "No critical gaps"}
//               </p>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Improved Resume</h3>
//               <p className="text-gray-400 whitespace-pre-line">
//                 {result.improvedResume || "No improvement generated"}
//               </p>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Cover Letter</h3>
//               <p className="text-gray-400 whitespace-pre-line">
//                 {result.coverLetter || "No cover letter generated"}
//               </p>
//             </div>

//             <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
//               <h3 className="font-semibold mb-2">Feedback</h3>
//               <p className="text-gray-400 whitespace-pre-line">
//                 {result.feedback || "No feedback generated"}
//               </p>
//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setToken(decoded.email);
    }
  }, []);

  const handleAnalyze = async () => {
    if (loading) return;

    if (!file || !job) {
      alert("Please upload resume and enter job description");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("job", job);

      const res = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (!data.success) {
        alert("Server error");
        return;
      }

      setResult({ ...data.result });
    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white w-full overflow-x-hidden">
      <div className="w-full md:w-72 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 p-5 flex flex-col transition-all duration-300 justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              JobAI
            </h1>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-blue-300 text-sm font-medium truncate max-w-[120px] hover:text-blue-200 transition-colors duration-200">
                {token || "Guest"}
              </span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            <Link to="/dashboard" className="px-4 py-2.5 rounded-xl whitespace-nowrap bg-[#1877F2]/10 text-blue-400 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Dashboard
            </Link>
            <Link to="/analyze" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
              Analyze
            </Link>
            <Link to="/history" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
              History
            </Link>
            <Link to="/insights" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
              Insights
            </Link>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2.5 rounded-xl bg-red-600/20 border border-red-600/30 text-red-400 font-medium transition-all duration-300 transform hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
          AI Resume Analyzer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-60 p-4 bg-gray-900 border-2 border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-blue-500 hover:bg-gray-900/50">
            {!file ? (
              <>
                <svg className="w-12 h-12 text-gray-500 mb-3 transition-all duration-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-400 mb-3 transition-all duration-300">
                  Upload Resume (PDF/DOCX)
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm text-gray-300 cursor-pointer transition-all duration-200 hover:text-blue-400 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500"
                />
                <p className="text-xs text-gray-500 mt-3">
                  Max size 5MB
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center animate-fadeIn">
                <svg className="w-12 h-12 text-green-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-400 font-medium break-all text-center transition-all duration-300 hover:scale-105">
                  {file.name}
                </p>
                <button
                  onClick={() => setFile(null)}
                  className="mt-3 text-sm text-red-400 hover:text-red-300 transition-all duration-200 font-medium"
                >
                  Remove file
                </button>
              </div>
            )}
          </div>

          <textarea
            className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 resize-none"
            placeholder="Paste job description here..."
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold w-full md:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        {loading && (
          <div className="mt-10 text-center text-blue-400 animate-pulse">
            <div className="inline-flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              Analyzing Resume...
            </div>
          </div>
        )}

        {!loading && result && (
          <div className="mt-10 space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-gray-900 to-gray-900/80 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-green-400 text-3xl font-bold transition-all duration-300 hover:scale-105 inline-block">
                    {result.atsScoreSection?.totalScore || 0}%
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">ATS Score</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                  <p className="text-green-400 text-sm font-medium">{result.atsScoreSection?.label || "N/A"}</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                {result.atsScoreSection?.summary || "No summary"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
                <h3 className="font-semibold mb-3 text-blue-400">✓ Matched Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {(result.matchedSkills || []).map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:scale-105 hover:bg-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10">
                <h3 className="font-semibold mb-3 text-yellow-400">⚠ Missing Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {(result.missingSkills || []).map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:scale-105 hover:bg-yellow-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <h3 className="font-semibold mb-3 text-purple-400">📄 Improved Resume</h3>
              <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
                {result.improvedResume || "No improvement generated"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="font-semibold mb-3 text-indigo-400">✉ Cover Letter</h3>
              <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
                {result.coverLetter || "No cover letter generated"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10">
              <h3 className="font-semibold mb-3 text-cyan-400">💡 AI Feedback</h3>
              <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
                {result.feedback || "No feedback generated"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`}</style>