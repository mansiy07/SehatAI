// ==========================================
// Dashboard
// ==========================================

import "./../styles/Dashboard.css";

import {
  FaHeartbeat,
  FaHospital,
  FaPills,
  FaFileMedical,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

function Dashboard() {

  return (

    <div className="dashboard">

      {/* Header */}

      <header className="dashboard-header">

        <h2>🏥 SehatAI Dashboard</h2>

        <div className="user-box">

          <FaUserCircle />

          <span>Welcome, User</span>

        </div>

      </header>

      {/* Cards */}

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <FaHeartbeat className="card-icon"/>

          <h3>AI Symptom Checker</h3>

          <p>Analyze symptoms instantly using AI.</p>

        </div>

        <div className="dashboard-card">

          <FaHospital className="card-icon"/>

          <h3>Nearby Hospitals</h3>

          <p>Find hospitals around your location.</p>

        </div>

        <div className="dashboard-card">

          <FaPills className="card-icon"/>

          <h3>Medicines</h3>

          <p>View medicine suggestions.</p>

        </div>

        <div className="dashboard-card">

          <FaFileMedical className="card-icon"/>

          <h3>Health Records</h3>

          <p>Access your saved reports.</p>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="activity">

        <h3>Recent Activity</h3>

        <p>No recent activity found.</p>

      </div>

      {/* Logout */}

      <button className="logout-btn">

        <FaSignOutAlt />

        Logout

      </button>

    </div>

  );

}

export default Dashboard;