
import { useState } from "react";

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

      console.log("BACKEND RESPONSE:", data);

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
    <div className="min-h-screen flex bg-gray-950 text-white">

    
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-5">
        <h1 className="text-xl font-bold text-blue-500 mb-8">JobAI</h1>

        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Analyze</li>
          <li className="hover:text-white cursor-pointer">History</li>
          <li className="hover:text-white cursor-pointer">Insights</li>
        </ul>
      </div>

  
      <div className="flex-1 p-8">

        <h2 className="text-3xl font-bold mb-6">
          AI Resume Analyzer
        </h2>

      
        <div className="grid grid-cols-2 gap-6">

    
          <div className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">

            {!file ? (
              <>
                <p className="text-gray-400 mb-2">
                  Upload Resume (PDF/DOCX)
                </p>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="text-sm text-gray-300"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Max size 5MB
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-green-400 font-medium">
                  {file.name}
                </p>

                <button
                  onClick={() => setFile(null)}
                  className="mt-2 text-sm text-red-400 hover:underline"
                >
                  Remove file
                </button>
              </div>
            )}

          </div>

        
          <textarea
            className="h-60 p-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste job description..."
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

        </div>


        <button
          onClick={handleAnalyze}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

  
        {loading && (
          <div className="mt-10 text-center text-blue-400">
            Analyzing Resume...
          </div>
        )}

    
        {!loading && result && (
          <div className="mt-10 space-y-6">

            
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="text-green-400 text-xl font-bold">
                ATS Score: {result.atsScoreSection?.totalScore || 0}%
              </h3>

              <p className="text-gray-400 mt-1">
                {result.atsScoreSection?.label || "N/A"}
              </p>

              <p className="text-gray-500 mt-1">
                {result.atsScoreSection?.summary || "No summary"}
              </p>
            </div>

      
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Matched Skills</h3>
              <p className="text-gray-400">
                {(result.matchedSkills || []).length > 0
                  ? result.matchedSkills.join(", ")
                  : "No matched skills found"}
              </p>
            </div>

  
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Missing Skills</h3>
              <p className="text-gray-400">
                {(result.missingSkills || []).length > 0
                  ? result.missingSkills.join(", ")
                  : "No missing skills detected"}
              </p>
            </div>

          
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Critical Gaps</h3>
              <p className="text-gray-400">
                {(result.criticalGaps || []).length > 0
                  ? result.criticalGaps.join(", ")
                  : "No critical gaps"}
              </p>
            </div>

    
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Improved Resume</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.improvedResume || "No improvement generated"}
              </p>
            </div>

  
            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
              <h3 className="font-semibold mb-2">Cover Letter</h3>
              <p className="text-gray-400 whitespace-pre-line">
                {result.coverLetter || "No cover letter generated"}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;