import "./Features.css";
import { motion } from "framer-motion";
import { FaRobot, FaHospital, FaPills } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Smart Features
      </motion.h2>

      <div className="feature-container">

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaRobot className="icon" />
          <h3>AI Symptom Checker</h3>
          <p>
            Describe your symptoms and get AI-powered health guidance instantly.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaHospital className="icon" />
          <h3>Nearby Hospitals</h3>
          <p>
            Find nearby hospitals and healthcare centers with one click.
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaPills className="icon" />
          <h3>Medicine Suggestions</h3>
          <p>
            Get medicine recommendations based on your symptoms.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Features;