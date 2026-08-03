import "./SymptomChecker.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaNotesMedical,
  FaPills,
  FaHeartbeat
} from "react-icons/fa";

function SymptomChecker() {

  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {

    if (symptoms.trim() === "") {

      alert("Please enter your symptoms.");

      return;

    }

    setLoading(true);

    // Temporary response
    // Later this will come from Spring Boot API

    setTimeout(() => {

      setResult({

        disease: "Possible Viral Fever",

        medicine: "Paracetamol, ORS, Drink plenty of water",

        advice:
          "If symptoms continue for more than 2-3 days, consult a doctor immediately."

      });

      setLoading(false);

    }, 2000);

  };

  return (

    <section className="symptom" id="symptom">

      <motion.h2

        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: .6 }}

        viewport={{ once: true }}

      >

        🤖 AI Symptom Checker

      </motion.h2>

      <p className="symptom-subtitle">

        Describe your symptoms and get instant AI-powered health guidance.

      </p>

      <div className="symptom-box">

        <textarea

          placeholder="Example: Fever, cough, headache..."

          value={symptoms}

          onChange={(e) => setSymptoms(e.target.value)}

        />

        <button

          onClick={handleAnalyze}

          disabled={loading}

        >

          <FaRobot />

          {loading ? "Analyzing..." : "Analyze Symptoms"}

        </button>

      </div>

      {loading && (

        <div className="loading">

          Analyzing Symptoms...

        </div>

      )}

      {result && (

        <motion.div

          className="result-card"

          initial={{ opacity: 0, y: 60 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: .6 }}

        >

          <div className="result-item">

            <FaHeartbeat className="result-icon" />

            <div>

              <h3>Possible Condition</h3>

              <p>{result.disease}</p>

            </div>

          </div>

          <div className="result-item">

            <FaPills className="result-icon" />

            <div>

              <h3>Suggested Medicine</h3>

              <p>{result.medicine}</p>

            </div>

          </div>

          <div className="result-item">

            <FaNotesMedical className="result-icon" />

            <div>

              <h3>Recommendation</h3>

              <p>{result.advice}</p>

            </div>

          </div>

        </motion.div>

      )}

    </section>

  );

}

export default SymptomChecker;