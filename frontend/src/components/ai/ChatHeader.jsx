// ==========================================
// Chat Header
// ==========================================

import "../../styles/ai/ChatHeader.css";

import {
  FaRobot,
  FaEllipsisV
} from "react-icons/fa";

function ChatHeader() {

  return (

    <div className="chat-header">

      <div className="header-info">

        <FaRobot className="ai-logo"/>

        <div>

          <h2>SehatAI Assistant</h2>

          <span>🟢 Online</span>

        </div>

      </div>

      <button className="header-menu">

        <FaEllipsisV />

      </button>

    </div>

  );

}

export default ChatHeader;