import "./Features.css";

import { motion } from "framer-motion";

import {
  FaRobot,
  FaHospital,
  FaPills,
  FaFileMedical
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Smart Features
      </motion.h2>

      <motion.p
        className="feature-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Everything you need for smarter healthcare in one place.
      </motion.p>

      <div className="feature-container">

        <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        >
          <FaRobot className="icon" />

          <h3>AI Symptom Checker</h3>

          <p>
            Describe your symptoms and receive instant AI-powered health guidance.
          </p>

        </motion.div>

        <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        >
          <FaHospital className="icon" />

          <h3>Nearby Hospitals</h3>

          <p>
            Find nearby hospitals and healthcare centers with a single click.
          </p>

        </motion.div>

        <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        >
          <FaPills className="icon" />

          <h3>Medicine Suggestions</h3>

          <p>
            Get AI-assisted medicine recommendations based on your symptoms.
          </p>

        </motion.div>

        <motion.div
        className="feature-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        >
          <FaFileMedical className="icon" />

          <h3>Health Records</h3>

          <p>
            Securely store and access your medical reports anytime.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Features;