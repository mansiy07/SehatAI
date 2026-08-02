// ==========================================
// Footer Component
// Purpose:
// Show Website Information & Quick Links
// ==========================================

// Import CSS
import "./Footer.css";

// Import Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// Footer Component
function Footer() {

  return (

    // Main Footer
    <footer className="footer">

      {/* Footer Container */}
      <div className="footer-container">

        {/* =========================
            Left Section
        ========================== */}

        <div className="footer-box">

          <h2>SehatAI</h2>

          <p>
            AI Powered Smart Rural Health Assistant
            helping people with healthcare support.
          </p>

        </div>

        {/* =========================
            Quick Links
        ========================== */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Services</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* =========================
            Services
        ========================== */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>

            <li>AI Symptom Checker</li>

            <li>Medicine Suggestion</li>

            <li>Nearby Hospital</li>

          </ul>

        </div>

        {/* =========================
            Contact
        ========================== */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email : support@sehatai.com</p>

          <p>Phone : +91 9876543210</p>

          <p>India</p>

        </div>

      </div>

      {/* =========================
          Social Icons
      ========================== */}

      <div className="social-icons">

        <FaFacebook />

        <FaInstagram />

        <FaLinkedin />

        <FaGithub />

      </div>

      {/* =========================
          Copyright
      ========================== */}

      <p className="copyright">

        © 2026 SehatAI | All Rights Reserved

      </p>

    </footer>

  );

}

// Export Component
export default Footer;