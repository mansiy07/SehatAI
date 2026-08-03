// ==========================================
// About Component
// ==========================================

import "./About.css";

import { motion } from "framer-motion";

import {
  FaHeartbeat,
  FaUserMd,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

function About() {

  return (

    <section className="about" id="about">

      {/* Left Side */}

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <span className="about-tag">
          About SehatAI
        </span>

        <h2>
          Smarter Healthcare
          <br />
          For Everyone
        </h2>

        <p>
          SehatAI is an AI-powered healthcare platform
          designed to make healthcare accessible,
          affordable and easy to use.
          Our mission is to provide instant guidance,
          medicine suggestions and nearby hospital
          recommendations with a simple and modern
          experience.
        </p>

      </motion.div>

      {/* Right Side */}

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Card 1 */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaBrain className="about-icon" />

          <h3>AI Powered</h3>

          <p>
            Smart AI assistance for instant health support.
          </p>

        </motion.div>

        {/* Card 2 */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaUserMd className="about-icon" />

          <h3>Expert Guidance</h3>

          <p>
            Helpful recommendations for common health issues.
          </p>

        </motion.div>

        {/* Card 3 */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.30 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaHeartbeat className="about-icon" />

          <h3>Health Monitoring</h3>

          <p>
            Keep your health records organized securely.
          </p>

        </motion.div>

        {/* Card 4 */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaShieldAlt className="about-icon" />

          <h3>Secure Platform</h3>

          <p>
            Your information stays safe and protected.
          </p>

        </motion.div>

      </motion.div>

    </section>

  );

}

export default About;