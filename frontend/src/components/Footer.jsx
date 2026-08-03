// ==========================================
// Footer Component
// ==========================================

import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top"></div>

      <div className="footer-container">

        {/* Brand */}

        <motion.div
          className="footer-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h2>🏥 SehatAI</h2>

          <p>
            AI Powered Smart Rural Health Assistant
            helping people with healthcare support,
            symptom analysis and nearby hospitals.
          </p>

        </motion.div>

        {/* Quick Links */}

        <motion.div
          className="footer-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .15 }}
          viewport={{ once: true }}
        >

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><a href="#features">Features</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </motion.div>

        {/* Services */}

        <motion.div
          className="footer-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .3 }}
          viewport={{ once: true }}
        >

          <h3>Services</h3>

          <ul>

            <li>AI Symptom Checker</li>

            <li>Medicine Suggestion</li>

            <li>Nearby Hospital</li>

            <li>Health Records</li>

          </ul>

        </motion.div>

        {/* Contact */}

        <motion.div
          className="footer-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .45 }}
          viewport={{ once: true }}
        >

          <h3>Contact</h3>

          <p>📧 support@sehatai.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Greater Noida, India</p>

        </motion.div>

      </div>

      {/* Social */}

      <div className="social-icons">

        <a href="#"><FaFacebook /></a>

        <a href="#"><FaInstagram /></a>

        <a href="#"><FaLinkedin /></a>

        <a href="#"><FaGithub /></a>

      </div>

      <p className="copyright">

        © 2026 SehatAI • Built with ❤️ using React & Spring Boot

      </p>

    </footer>

  );

}

export default Footer;