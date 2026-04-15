const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// Dummy job description
const jobSkills = ["javascript", "react", "node", "python"];

// Resume upload API
app.post("/upload", upload.single("resume"), (req, res) => {
  const text = "javascript react node"; // simulate extracted text

  const matchedSkills = jobSkills.filter(skill =>
    text.toLowerCase().includes(skill)
  );

  const score = (matchedSkills.length / jobSkills.length) * 100;

  res.json({
    matchedSkills,
    score
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));