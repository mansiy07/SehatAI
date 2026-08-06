// ==========================================
// Settings Page
// ==========================================

import "./../styles/Settings.css";

import { useState } from "react";

import {
  FaMoon,
  FaBell,
  FaGlobe,
  FaShieldAlt,
  FaSave
} from "react-icons/fa";

function Settings() {

  const [darkMode, setDarkMode] = useState(true);

  const [notifications, setNotifications] = useState(true);

  const [language, setLanguage] = useState("English");

  return (

    <div className="settings-page">

      <div className="settings-card">

        <h1>⚙️ Settings</h1>

        <p>Manage your account preferences.</p>

        {/* Dark Mode */}

        <div className="setting-item">

          <div>

            <FaMoon className="setting-icon"/>

            <span>Dark Mode</span>

          </div>

          <label className="switch">

            <input

              type="checkbox"

              checked={darkMode}

              onChange={() =>
                setDarkMode(!darkMode)
              }

            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Notifications */}

        <div className="setting-item">

          <div>

            <FaBell className="setting-icon"/>

            <span>Notifications</span>

          </div>

          <label className="switch">

            <input

              type="checkbox"

              checked={notifications}

              onChange={() =>
                setNotifications(!notifications)
              }

            />

            <span className="slider"></span>

          </label>

        </div>

        {/* Language */}

        <div className="setting-item">

          <div>

            <FaGlobe className="setting-icon"/>

            <span>Language</span>

          </div>

          <select

            value={language}

            onChange={(e)=>setLanguage(e.target.value)}

          >

            <option>English</option>

            <option>Hindi</option>

          </select>

        </div>

        {/* Privacy */}

        <div className="setting-item">

          <div>

            <FaShieldAlt className="setting-icon"/>

            <span>Privacy</span>

          </div>

          <button className="privacy-btn">

            Manage

          </button>

        </div>

        {/* Save */}

        <button className="save-btn">

          <FaSave />

          Save Changes

        </button>

      </div>

    </div>

  );

}

export default Settings;