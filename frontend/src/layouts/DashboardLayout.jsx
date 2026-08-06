// ==========================================
// Dashboard Layout
// ==========================================

import "./../styles/DashboardLayout.css";

import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaBell,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaCog,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";

function DashboardLayout() {

  const navigate = useNavigate();

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  const [showNotifications, setShowNotifications] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  // Dark Mode

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("dark");

    } else {

      document.body.classList.remove("dark");

    }

  }, [darkMode]);

  // Close dropdown on outside click

  useEffect(() => {

    function handleClickOutside(e) {

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  return (

    <div className="layout">

      <Sidebar />

      <div className="layout-main">

        {/* Header */}

        <header className="layout-header">

          {/* Search */}

          <div className="header-left">

            <div className="search-box">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search diseases, hospitals..."
              />

            </div>

          </div>

          {/* Right */}

          <div className="header-right">

            {/* Notification */}

            <div
              className="header-item"
              ref={notificationRef}
            >

              <FaBell
                className="header-icon"
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
              />

              {showNotifications && (

                <div className="dropdown notification-dropdown">

                  <h4>Notifications</h4>

                  <p>✅ Welcome to SehatAI</p>

                  <p>🩺 No new health alerts</p>

                  <p>📚 New health article available</p>

                </div>

              )}

            </div>

            {/* Dark Mode */}

            <div className="header-item">

              {

                darkMode ? (

                  <FaSun
                    className="header-icon"
                    onClick={() =>
                      setDarkMode(false)
                    }
                  />

                ) : (

                  <FaMoon
                    className="header-icon"
                    onClick={() =>
                      setDarkMode(true)
                    }
                  />

                )

              }

            </div>

            {/* Profile */}

            <div
              className="header-item"
              ref={profileRef}
            >

              <div
                className="profile-box"
                onClick={() =>
                  setShowProfile(!showProfile)
                }
              >

                <FaUserCircle />

                <span>Mansi</span>

              </div>

              {showProfile && (

                <div className="dropdown profile-dropdown">

                  <p
                    onClick={() =>
                      navigate("/profile")
                    }
                  >

                    <FaUserCircle />

                    My Profile

                  </p>

                  <p
                    onClick={() =>
                      navigate("/settings")
                    }
                  >

                    <FaCog />

                    Settings

                  </p>

                  <p
                    onClick={() =>
                      navigate("/change-password")
                    }
                  >

                    <FaKey />

                    Change Password

                  </p>

                  <p
                    onClick={() =>
                      navigate("/login")
                    }
                  >

                    <FaSignOutAlt />

                    Logout

                  </p>

                </div>

              )}

            </div>

          </div>

        </header>

        {/* Pages */}

        <main className="layout-content">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default DashboardLayout;