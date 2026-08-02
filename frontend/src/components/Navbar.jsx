// =======================================
// Navbar Component
// =======================================

import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {

  // ===============================
  // Navbar Scroll Effect
  // ===============================

  const [scroll, setScroll] = useState(false);

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

      <div className="logo">

        <span>🏥</span>

        <h2>SehatAI</h2>

      </div>

      {/* Navigation Links */}

      <ul>

        <li>Home</li>

        <li>Services</li>

        <li>About</li>

        <li>Contact</li>

      </ul>

      {/* Login Button */}

      <button>Login</button>

    </nav>

  );

}

export default Navbar;