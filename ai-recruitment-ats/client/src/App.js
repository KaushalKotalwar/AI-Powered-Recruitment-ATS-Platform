import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadResume = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h1>🚀 AI Recruitment ATS</h1>

      <div className="card">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={uploadResume}>Upload Resume</button>
      </div>

      {result && (
        <div className="result">
          <h2>Match Score: {result.score}%</h2>
          <p>Matched Skills:</p>
          <ul>
            {result.matchedSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;