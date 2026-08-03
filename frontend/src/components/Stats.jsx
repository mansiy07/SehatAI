import "./Stats.css";

import { motion } from "framer-motion";

function Stats() {

  return (

    <section className="stats">

      {/* ===========================
              Heading
      =========================== */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Trusted By Thousands
      </motion.h2>

      <motion.p
        className="stats-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        SehatAI is helping patients with AI-powered healthcare
        across India.
      </motion.p>

      {/* ===========================
              Stats Cards
      =========================== */}

      <div className="stats-container">

        {/* Card 1 */}

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <h1>10K+</h1>
          <p>Happy Patients</p>

        </motion.div>

        {/* Card 2 */}

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <h1>500+</h1>

          <p>Doctors</p>

        </motion.div>

        {/* Card 3 */}

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <h1>200+</h1>

          <p>Hospitals</p>

        </motion.div>

        {/* Card 4 */}

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >

          <h1>24/7</h1>

          <p>AI Support</p>

        </motion.div>

      </div>

    </section>

  );

}

export default Stats;