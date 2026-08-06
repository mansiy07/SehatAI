// ==========================================
// Symptom Checker
// ==========================================

import "./../styles/SymptomChecker.css";

import { useState } from "react";

import {
  FaHeartbeat,
  FaUser,
  FaWeight,
  FaCalendarAlt,
  FaNotesMedical,
  FaUserMd,
  FaExclamationTriangle
} from "react-icons/fa";

function SymptomChecker() {

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    duration: "",
    severity: "",
    history: "",
    symptoms: "",
  });

  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  return (

    <div className="symptom-page">

      <div className="symptom-card">

        <FaHeartbeat className="symptom-icon" />

        <h1>AI Symptom Checker</h1>

        <p>

          Describe your symptoms and let SehatAI analyze them.

        </p>

        {/* Name */}

        <div className="input-group">

          <FaUser />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

        </div>

        {/* Age */}

        <div className="input-group">

          <FaCalendarAlt />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

        </div>

        {/* Gender */}

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >

          <option value="">Select Gender</option>

          <option>Male</option>

          <option>Female</option>

          <option>Other</option>

        </select>

        {/* Weight */}

        <div className="input-group">

          <FaWeight />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={handleChange}
          />

        </div>

        {/* Duration */}

        <input
          type="text"
          name="duration"
          placeholder="Symptoms Duration (e.g. 2 Days)"
          value={form.duration}
          onChange={handleChange}
        />

        {/* Severity */}

        <select
          name="severity"
          value={form.severity}
          onChange={handleChange}
        >

          <option value="">Select Severity</option>

          <option>Mild</option>

          <option>Moderate</option>

          <option>Severe</option>

        </select>

        {/* Medical History */}

        <textarea

          rows="3"

          name="history"

          placeholder="Medical History (Diabetes, BP, Asthma...)"

          value={form.history}

          onChange={handleChange}

        />

        {/* Symptoms */}

        <textarea

          rows="5"

          name="symptoms"

          placeholder="Example: Fever, cough, headache for 2 days..."

          value={form.symptoms}

          onChange={handleChange}

        />

        <button
          onClick={() => setShowResult(true)}
        >

          Analyze Symptoms

        </button>

      </div>

      {/* Demo Result */}

      {

        showResult && (

          <div className="result-card">

            <h2>🤖 AI Analysis</h2>

            <div className="result-item">

              <FaNotesMedical />

              <div>

                <h4>Possible Condition</h4>

                <p>Common Viral Infection</p>

              </div>

            </div>

            <div className="result-item">

              <FaUserMd />

              <div>

                <h4>Recommended Doctor</h4>

                <p>General Physician</p>

              </div>

            </div>

            <div className="result-item">

              <FaExclamationTriangle />

              <div>

                <h4>Risk Level</h4>

                <p style={{color:"#22c55e"}}>

                  Low Risk

                </p>

              </div>

            </div>

            <div className="tips">

              <h4>💡 First Aid Tips</h4>

              <ul>

                <li>Drink plenty of water.</li>

                <li>Take proper rest.</li>

                <li>Monitor your temperature.</li>

                <li>Consult a doctor if symptoms worsen.</li>

              </ul>

            </div>

          </div>

        )

      }

    </div>

  );

}

export default SymptomChecker;