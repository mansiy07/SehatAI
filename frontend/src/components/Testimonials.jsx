// =======================================
// Testimonials Section
// =======================================

// Import CSS
import "./Testimonials.css";

// Import Star Icon
import { FaStar } from "react-icons/fa";

// Import Framer Motion
import { motion } from "framer-motion";

function Testimonials() {

  return (

    <section className="testimonials">

      {/* ===========================
            Section Heading
      =========================== */}

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        What Our Users Say
      </motion.h2>

      {/* ===========================
              Cards
      =========================== */}

      <div className="testimonial-container">

        {/* Card 1 */}

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "SehatAI helped me understand
            my symptoms before visiting a
            doctor. Very useful!"
          </p>

          <h3>Ramesh Kumar</h3>

          <span>Uttar Pradesh</span>

        </motion.div>

        {/* Card 2 */}

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .2 }}
          viewport={{ once: true }}
        >

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "Nearby hospital feature
            saved a lot of time.
            Simple and easy to use."
          </p>

          <h3>Sunita Devi</h3>

          <span>Bihar</span>

        </motion.div>

        {/* Card 3 */}

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .4 }}
          viewport={{ once: true }}
        >

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "Medicine suggestions are
            very helpful for common
            health problems."
          </p>

          <h3>Amit Sharma</h3>

          <span>Rajasthan</span>

        </motion.div>

      </div>

    </section>

  );
}

export default Testimonials;