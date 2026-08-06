// ==========================================
// Learn Page
// ==========================================

import "./../styles/Learn.css";

import {
  FaHeartbeat,
  FaAppleAlt,
  FaRunning,
  FaNotesMedical,
  FaVirus,
  FaCapsules,
  FaArrowRight
} from "react-icons/fa";

function Learn() {
  const topics = [
    {
      icon: <FaHeartbeat />,
      title: "Heart Health",
      desc: "Understand heart diseases, warning signs, blood pressure management, and daily habits that help keep your heart healthy.",
      color: "#ff4d6d"
    },

    {
      icon: <FaAppleAlt />,
      title: "Healthy Diet",
      desc: "Explore balanced nutrition, healthy eating habits, hydration, vitamins, and foods that strengthen your immune system.",
      color: "#22c55e"
    },

    {
      icon: <FaRunning />,
      title: "Exercise",
      desc: "Learn simple daily workouts, stretching routines, and fitness tips suitable for every age group.",
      color: "#0ea5e9"
    },

    {
      icon: <FaNotesMedical />,
      title: "First Aid",
      desc: "Know how to respond during emergencies including burns, bleeding, fractures, CPR, and basic first aid.",
      color: "#f59e0b"
    },

    {
      icon: <FaVirus />,
      title: "Disease Prevention",
      desc: "Discover ways to prevent infections, maintain hygiene, boost immunity, and stay protected from common illnesses.",
      color: "#8b5cf6"
    },

    {
      icon: <FaCapsules />,
      title: "Medicine Guide",
      desc: "Understand safe medicine usage, dosage awareness, storage, and why self-medication should be avoided.",
      color: "#06b6d4"
    }
  ];

  return (
    <section className="learn-page">
      <div className="learn-container">
        <div className="learn-header">
          <span className="learn-badge">AI Health Learning</span>

          <h1>
            Learn About <span>Healthy Living</span>
          </h1>

          <p>
            Build better health habits through simple educational topics.
            Explore trusted healthcare knowledge that will later be enhanced
            using AI-powered guidance and personalized recommendations.
          </p>
        </div>

        <div className="learn-grid">
          {topics.map((item, index) => (
            <div
              className="learn-card"
              key={index}
              style={{
                "--card-color": item.color
              }}
            >
              <div className="learn-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button className="learn-btn">
                Read More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learn;