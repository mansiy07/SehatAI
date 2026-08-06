// ==========================================
// Chat Sidebar
// ==========================================

import "../../styles/ai/ChatSidebar.css";

import { useState } from "react";

import {
  FaPlus,
  FaComments,
  FaTrash,
  FaClock
} from "react-icons/fa";

function ChatSidebar() {

  const [activeChat, setActiveChat] = useState(0);

  const chats = [

    "Fever Treatment",

    "Healthy Diet",

    "Diabetes Guide",

    "Java Notes",

    "Mental Health"

  ];

  return (

    <aside className="chat-sidebar">

      {/* New Chat */}

      <button className="new-chat">

        <FaPlus />

        New Chat

      </button>

      {/* Recent Chats */}

      <h3>

        <FaComments />

        Recent Chats

      </h3>

      <div className="chat-history">

        {

          chats.map((chat,index)=>(

            <div

              key={index}

              className={`history-item ${
                activeChat===index ? "active" : ""
              }`}

              onClick={()=>setActiveChat(index)}

            >

              <FaClock />

              <span>

                {chat}

              </span>

            </div>

          ))

        }

      </div>

      {/* Clear */}

      <button className="clear-chat">

        <FaTrash />

        Clear Chats

      </button>

    </aside>

  );

}

export default ChatSidebar;