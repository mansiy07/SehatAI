// ==========================================
// Dashboard
// ==========================================

import "./../styles/Dashboard.css";

import { useNavigate } from "react-router-dom";

import {
  FaRobot,
  FaHeartbeat,
  FaHospital,
  FaBookMedical,
  FaFileMedical,
  FaClipboardList,
  FaSignOutAlt
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <main className="dashboard-content">

      {/* Page Title */}

      <h2 className="dashboard-title">

        🏥 SehatAI Dashboard

      </h2>

      {/* Cards */}

      <div className="dashboard-grid">

        <div
          className="dashboard-card"
          onClick={() => navigate("/ai")}
        >

          <FaRobot className="card-icon"/>

          <h3>AI Assistant</h3>

          <p>Chat with SehatAI powered AI Assistant.</p>

        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/symptom")}
        >

          <FaHeartbeat className="card-icon"/>

          <h3>Symptom Checker</h3>

          <p>Analyze symptoms instantly using AI.</p>

        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/hospitals")}
        >

          <FaHospital className="card-icon"/>

          <h3>Nearby Hospitals</h3>

          <p>Find hospitals around your location.</p>

        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/learn")}
        >

          <FaBookMedical className="card-icon"/>

          <h3>Health Education</h3>

          <p>Learn diseases, tips and healthcare.</p>

        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/records")}
        >

          <FaFileMedical className="card-icon"/>

          <h3>Health Records</h3>

          <p>Access all your saved reports.</p>

        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/quiz")}
        >

          <FaClipboardList className="card-icon"/>

          <h3>Health Quiz</h3>

          <p>Improve your health knowledge.</p>

        </div>

      </div>

      {/* Activity */}

      <div className="activity">

        <h3>Recent Activity</h3>

        <p>No recent activity found.</p>

      </div>

      {/* Logout */}

      <button className="logout-btn">

        <FaSignOutAlt />

        Logout

      </button>

    </main>

  );

}

export default Dashboard;