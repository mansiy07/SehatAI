// ==========================================
// Chat Message
// ==========================================

import "../../styles/ai/ChatMessage.css";

import {
  FaRobot,
  FaUserCircle,
  FaCopy,
  FaThumbsUp,
  FaThumbsDown
} from "react-icons/fa";

function ChatMessage({ sender, text, time }) {

  return (

    <div className={`message ${sender}`}>

      <div className="message-avatar">

        {

          sender === "ai"

          ? <FaRobot />

          : <FaUserCircle />

        }

      </div>

      <div className="message-content">

        <div className="message-bubble">

          {text}

        </div>

        <div className="message-footer">

          <span>{time}</span>

          {

            sender === "ai" &&

            <div className="message-actions">

              <FaCopy />

              <FaThumbsUp />

              <FaThumbsDown />

            </div>

          }

        </div>

      </div>

    </div>

  );

}

export default ChatMessage;