// ==========================================
// Hero Section Component
// ==========================================

// Import Hero CSS
import "./Hero.css";

// Import Hero Image
import doctor from "../assets/doctor.png";

// Import Framer Motion
import { motion } from "framer-motion";

// Import React Router
import { Link } from "react-router-dom";

function Hero() {

  const scrollToServices = () => {

    const section = document.getElementById("services");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <section className="hero" id="home">

      {/* Floating Background Circles */}

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      {/* Left Content */}

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        {/* AI Badge */}

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          🚀 AI Powered Healthcare
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          AI Powered <span>Smart Rural</span>
          <br />
          Health Assistant
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Get instant AI-powered healthcare support with
          symptom analysis, medicine suggestions, and
          nearby hospital recommendations — all in one
          smart platform.
        </motion.p>

        {/* Buttons */}

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >

          <Link to="/login">

            <button className="btn-primary">

              Get Started →

            </button>

          </Link>

          <button
            className="btn-secondary"
            onClick={scrollToServices}
          >

            Learn More

          </button>

        </motion.div>

      </motion.div>

      {/* Right Image */}

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
      >

        <img
          src={doctor}
          alt="AI Doctor"
        />

      </motion.div>

    </section>

  );

}

export default Hero;