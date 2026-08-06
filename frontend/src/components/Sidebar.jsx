// ==========================================
// Sidebar Component
// ==========================================

import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaRobot,
  FaHeartbeat,
  FaHospital,
  FaBookMedical,
  FaFileMedical,
  FaUserCircle,
  FaClipboardList,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

  return (

    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <h2>🏥 SehatAI</h2>

      </div>

      {/* Menu */}

      <nav className="sidebar-menu">

        <NavLink to="/dashboard">

          <FaHome />

          <span>Dashboard</span>

        </NavLink>

        <NavLink to="/ai">

          <FaRobot />

          <span>AI Assistant</span>

        </NavLink>

        <NavLink to="/symptom">

          <FaHeartbeat />

          <span>Symptoms</span>

        </NavLink>

        <NavLink to="/hospitals">

          <FaHospital />

          <span>Hospitals</span>

        </NavLink>

        <NavLink to="/learn">

          <FaBookMedical />

          <span>Learn</span>

        </NavLink>

        <NavLink to="/records">

          <FaFileMedical />

          <span>Health Records</span>

        </NavLink>

        <NavLink to="/quiz">

          <FaClipboardList />

          <span>Quiz</span>

        </NavLink>

        <NavLink to="/profile">

          <FaUserCircle />

          <span>Profile</span>

        </NavLink>

      </nav>

      {/* Logout */}

      <button className="logout">

        <FaSignOutAlt />

        Logout

      </button>

    </aside>

  );

}

export default Sidebar;