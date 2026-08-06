// ==========================================
// Typing Loader
// ==========================================

import "../../styles/ai/TypingLoader.css";

import { FaRobot } from "react-icons/fa";

function TypingLoader() {

  return (

    <div className="typing-container">

      <FaRobot className="typing-avatar"/>

      <div className="typing-box">

        <span className="dot"></span>

        <span className="dot"></span>

        <span className="dot"></span>

      </div>

    </div>

  );

}

export default TypingLoader;