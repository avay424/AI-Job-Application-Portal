// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// function History() {
//     const navigate = useNavigate();
//     const [file, setFile] = useState(null);
//     const [job, setJob] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [result, setResult] = useState(null);
//     const [token, setToken] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {

//             const token = localStorage.getItem("token");

//             if (token) {
//                 const decoded = jwtDecode(token);
//                 setToken(decoded.email);
//             }

//             const res = await fetch("http://localhost:5000/history", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json", // remove this if using FormData
//                 },
//                 body: JSON.stringify({ email: decoded?.email }) // adjust as needed
//             });

//             const data = await res.json();

//             //       if (!data.success) {
//             //         alert("Server error");
//             //         return;
//             //       }

//             //       setResult(data.result);

//             //     } catch (err) {
//             //       console.error(err);
//             //       alert("Something went wrong");
//             //     }
//             //   };
//         }
//         fetchData();
//     }, []);







//     return (
//         <div className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white w-full overflow-x-hidden">
//             <div className="w-full md:w-72 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 p-5 flex flex-col transition-all duration-300 justify-between">
//                 <div>
//                     <div className="flex items-center justify-between mb-6">
//                         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
//                             JobAI
//                         </h1>
//                         <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer">
//                             <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
//                             <span className="text-blue-300 text-sm font-medium truncate max-w-[120px] hover:text-blue-200 transition-colors duration-200">
//                                 {token || "Guest"}
//                             </span>
//                         </div>
//                     </div>

//                     <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
//                         <Link to="/dashboard" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
//                             Dashboard
//                         </Link>
//                         <Link to="/analyze" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
//                             Analyze
//                         </Link>
//                         <Link to="/history" className="px-4 py-2.5 rounded-xl whitespace-nowrap bg-[#1877F2]/10 text-blue-400 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
//                             History
//                         </Link>
//                         <Link to="/insights" className="px-4 py-2.5 rounded-xl whitespace-nowrap text-gray-300 font-medium transition-all duration-300 transform hover:bg-[#1877F2] hover:text-white hover:scale-105">
//                             Insights
//                         </Link>
//                     </div>
//                 </div>

//                 <button
//                     className="mt-6 px-4 py-2.5 rounded-xl bg-red-600/20 border border-red-600/30 text-red-400 font-medium transition-all duration-300 transform hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
//                 >
//                     Logout
//                 </button>
//             </div>

//             <div className="flex-1 p-4 md:p-8">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-6 transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
//                     My Applications
//                 </h2>
//                 <h3>View all your past analysis</h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


//                     <p className="text-xs text-gray-500 mt-3">
//                         Max size 5MB
//                     </p>

//                     <div className="flex flex-col items-center animate-fadeIn">
//                         <svg className="w-12 h-12 text-green-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <p className="text-green-400 font-medium break-all text-center transition-all duration-300 hover:scale-105">
//                             hii
//                         </p>

//                     </div>

//                 </div>
//             </div>
//         </div>







//     );
// }



// <style>{`
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
//   .animate-fadeIn {
//     animation: fadeIn 0.5s ease-out forwards;
//   }
// `}</style>


// export default History;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        let email = "";

        if (storedToken) {
          const decoded = jwtDecode(storedToken);
          email = decoded.email;
          setToken(email);
        }

        const res = await fetch("https://ai-job-application-portal-8.onrender.com/history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.success) {
          setHistory(data.result || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white w-full overflow-x-hidden">
      
      <div className="w-full md:w-72 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              JobAI
            </h1>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/50 border border-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-blue-300 text-sm font-medium truncate max-w-[120px]">
                {token || "Guest"}
              </span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-2">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/analyze" className="nav-link">Analyze</Link>
            <Link to="/history" className="nav-link active">History</Link>
            <Link to="/insights" className="nav-link">Insights</Link>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-6 px-4 py-2.5 rounded-xl bg-red-600/20 border border-red-600/30 text-red-400 font-medium hover:bg-red-600 hover:text-white transition"
        >
          Logout
        </button>
      </div>

  
      <div className="flex-1 p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">History</h2>

        {loading && (
          <div className="flex justify-center mt-10">
            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!loading && history.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            No history found
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {history.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500 transition"
            >
            
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {item.job || "Job Role"}
                </h3>
                <p className="text-xs text-gray-400">Recent</p>
              </div>

              
              <div className="mb-3">
                <span className="text-green-400 font-bold">
                  ATS Score: {item.atsScoreSection?.totalScore || "N/A"}%
                </span>
              </div>
               <h3 className="font-bold mb-3 text-blue-400">Matched Skills:</h3>
               <div className="flex flex-wrap gap-2">
                  {(item.matchedSkills || []).map((skill, index) => (
                    <span key={index} className="px-3 mb-2 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:scale-105 hover:bg-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
                  <h3 className="font-bold mb-3 text-blue-400">Missing Skills:</h3>
               <div className="flex flex-wrap gap-2">
                  {(item.missingSkills || []).map((skill, index) => (
                    <span key={index} className="px-3 mb-2 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:scale-105 hover:bg-blue-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
               <div className="mb-3">
                <h1 className="text-green-400 font-bold">ImprovedResume:</h1>
                <span className="text-sm text-gray-300 whitespace-pre-line">
                  {item.improvedResume || "N/A"}
                </span>
              </div>

              
               <h1 className="text-green-400 font-bold">Feedback:</h1>
              <div className="text-sm text-gray-300 whitespace-pre-line">
                {item.feedback}
              </div>
             
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .nav-link {
          padding: 10px 14px;
          border-radius: 10px;
          color: #9ca3af;
          transition: 0.3s;
        }
        .nav-link:hover {
          background: #1877f2;
          color: white;
        }
        .nav-link.active {
          background: rgba(24,119,242,0.2);
          color: #60a5fa;
        }
      `}</style>
    </div>
  );
}