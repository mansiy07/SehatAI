// ==========================================
// Services Component
// ==========================================

import "./Services.css";

import { motion } from "framer-motion";

import {
  FaRobot,
  FaPills,
  FaHospital,
  FaFileMedical,
} from "react-icons/fa";

function Services() {

  return (

    <section className="services" id="services">

      {/* ==========================
            Heading
      ========================== */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Healthcare Services
      </motion.h2>

      <motion.p
        className="services-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Smart AI solutions designed to provide fast,
        reliable and accessible healthcare support
        for everyone.
      </motion.p>

      {/* ==========================
            Services Cards
      ========================== */}

      <div className="services-container">

        {/* Card 1 */}

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaRobot className="service-icon" />

          <h3>AI Symptom Checker</h3>

          <p>
            Describe your symptoms and receive
            instant AI-powered health guidance.
          </p>

        </motion.div>

        {/* Card 2 */}

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaPills className="service-icon" />

          <h3>Medicine Suggestion</h3>

          <p>
            Get safe medicine recommendations
            based on your symptoms.
          </p>

        </motion.div>

        {/* Card 3 */}

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.30 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaHospital className="service-icon" />

          <h3>Nearby Hospitals</h3>

          <p>
            Find the nearest hospitals and
            healthcare centers quickly.
          </p>

        </motion.div>

        {/* Card 4 */}

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <FaFileMedical className="service-icon" />

          <h3>Health Records</h3>

          <p>
            Securely manage and access
            your health reports anytime.
          </p>

        </motion.div>

      </div>

    </section>

  );

}

export default Services;