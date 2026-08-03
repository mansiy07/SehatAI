// =======================================
// Navbar Component
// =======================================

import "./Navbar.css";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// Theme Icons
import { FaMoon, FaSun } from "react-icons/fa";

// Theme Context
import { useTheme } from "../ThemeContext";

function Navbar() {

  const [scroll, setScroll] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {

        setScroll(true);

      } else {

        setScroll(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={scroll ? "navbar active" : "navbar"}>

      {/* Logo */}

      <Link to="/" className="logo">

        <span>🏥</span>

        <h2>SehatAI</h2>

      </Link>

      {/* Navigation */}

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Right Side */}

      <div className="nav-actions">

        {/* Theme Toggle */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >

          {darkMode ? <FaSun /> : <FaMoon />}

        </button>

        {/* Login */}

        <Link to="/login">

          <button>

            Login

          </button>

        </Link>

      </div>

    </nav>

  );

}

export default Navbar;