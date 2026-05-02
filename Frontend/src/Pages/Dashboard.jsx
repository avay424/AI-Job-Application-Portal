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
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white w-full overflow-x-hidden">

      <div className="w-full md:w-64 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-5 flex flex-col transition-all duration-300">

        <h1 className="text-xl font-bold text-blue-400 mb-4 md:mb-6 transition-transform duration-300 hover:scale-105">
          JobAI
        </h1>

        <div className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">

          <Link to="/dashboard" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-105">
            Dashboard
          </Link>

          <Link to="/analyze" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-105">
           Analyze
          </Link>

          <Link to="/history" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-105">
            History
          </Link>

          <Link to="/insights" className="px-4 py-2 rounded-lg whitespace-nowrap hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-105">
            Insights
          </Link>

        </div>
      </div>

      <div className="flex-1 p-4 md:p-8">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
          AI Resume Analyzer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">

            {!file ? (
              <>
                <p className="text-gray-400 mb-2 transition-all duration-300 hover:text-gray-300">
                  Upload Resume (PDF/DOCX)
                </p>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm text-gray-300 cursor-pointer transition-all duration-200 hover:text-blue-400"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Max size 5MB
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center animate-fadeIn">
                <p className="text-green-400 font-medium break-all transition-all duration-300 hover:scale-105">
                  {file.name}
                </p>

                <button
                  onClick={() => setFile(null)}
                  className="mt-2 text-sm text-red-400 hover:underline transition-all duration-200 hover:text-red-300"
                >
                  Remove file
                </button>
              </div>
            )}

          </div>

          <textarea
            className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
            placeholder="Paste job description..."
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg font-semibold w-full md:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
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

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10">
              <h3 className="text-green-400 text-xl font-bold transition-all duration-300 hover:scale-105 inline-block">
                ATS Score: {result.atsScoreSection?.totalScore || 0}%
              </h3>

              <p className="text-gray-400 mt-1">
                {result.atsScoreSection?.label || "N/A"}
              </p>

              <p className="text-gray-500 mt-1">
                {result.atsScoreSection?.summary || "No summary"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="font-semibold mb-2">Matched Skills</h3>
              <ul className="text-gray-400 list-disc list-inside space-y-1">
                {(result.matchedSkills || []).map((skill, index) => (
                  <li key={index} className="transition-all duration-200 hover:text-green-400 hover:translate-x-1">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/10">
              <h3 className="font-semibold mb-2">Missing Skills</h3>
              <ul className="text-gray-400 list-disc list-inside space-y-1">
                {(result.missingSkills || []).map((skill, index) => (
                  <li key={index} className="transition-all duration-200 hover:text-yellow-400 hover:translate-x-1">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10">
              <h3 className="font-semibold mb-2">Critical Gaps</h3>
              <p className="text-gray-400">
                {(result.criticalGaps || []).join(", ") || "No critical gaps"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <h3 className="font-semibold mb-2">Improved Resume</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.improvedResume || "No improvement generated"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="font-semibold mb-2">Cover Letter</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.coverLetter || "No cover letter generated"}
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10">
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-gray-400 whitespace-pre-line">
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