// =======================================
// How It Works Section
// Purpose:
// Explain how SehatAI works in 4 simple steps
// =======================================

// Import CSS
import "./HowItWorks.css";

// Import Icons
import {
  FaClipboardList,
  FaRobot,
  FaPills,
  FaHospital,
  FaArrowRight,
} from "react-icons/fa";

// Import Framer Motion
import { motion } from "framer-motion";

// =======================================
// Component
// =======================================

function HowItWorks() {
  return (
    <section className="how">

      {/* ===================================
              Section Heading
      =================================== */}

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How SehatAI Works
      </motion.h2>

      {/* ===================================
              Steps Container
      =================================== */}

      <div className="steps">

        {/* ---------- Step 1 ---------- */}

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <FaClipboardList className="step-icon" />

          <h3>Describe Symptoms</h3>

          <p>
            Enter your symptoms in simple language.
          </p>

        </motion.div>

        {/* Arrow */}

        <FaArrowRight className="arrow" />

        {/* ---------- Step 2 ---------- */}

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .15 }}
          viewport={{ once: true }}
        >

          <FaRobot className="step-icon" />

          <h3>AI Analysis</h3>

          <p>
            Our AI analyzes your health condition instantly.
          </p>

        </motion.div>

        {/* Arrow */}

        <FaArrowRight className="arrow" />

        {/* ---------- Step 3 ---------- */}

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .3 }}
          viewport={{ once: true }}
        >

          <FaPills className="step-icon" />

          <h3>Medicine Suggestion</h3>

          <p>
            Get basic medicine recommendations safely.
          </p>

        </motion.div>

        {/* Arrow */}

        <FaArrowRight className="arrow" />

        {/* ---------- Step 4 ---------- */}

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .45 }}
          viewport={{ once: true }}
        >

          <FaHospital className="step-icon" />

          <h3>Nearby Hospital</h3>

          <p>
            Find the nearest healthcare center quickly.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default HowItWorks;