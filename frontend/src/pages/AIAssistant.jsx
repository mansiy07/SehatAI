// ==========================================
// AI Assistant
// ==========================================

import "./../styles/AIAssistant.css";

import { useState, useRef, useEffect } from "react";

import ChatSidebar from "../components/ai/ChatSidebar";
import ChatHeader from "../components/ai/ChatHeader";
import ChatMessage from "../components/ai/ChatMessage";
import ChatInput from "../components/ai/ChatInput";
import TypingLoader from "../components/ai/TypingLoader";

function AIAssistant() {

  const [message, setMessage] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Welcome to SehatAI!\n\nI'm your smart AI assistant.\n\nI can help you with:\n\n🏥 Healthcare Advice\n💊 Medicines Information\n📍 Nearby Hospitals\n🥗 Healthy Diet Plans\n🏃 Fitness Tips\n📚 Health Education\n💻 Coding Support\n\nAsk me anything to get started.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const messagesEndRef = useRef(null);

  const quickSuggestions = [
    "🤒 I have fever",
    "🥗 Healthy diet plan",
    "💊 Medicine information",
    "🏥 Find hospitals",
    "💻 Java help",
    "📚 Health education",
  ];

  // ==========================================
  // Auto Scroll
  // ==========================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  // ==========================================
  // Send Message
  // ==========================================

  const sendMessage = (customMessage = message) => {

    if (!customMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: customMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");

    setTyping(true);

    setTimeout(() => {

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            "🤖 Demo AI Response\n\nCurrently this is a frontend demo.\n\nAfter integrating Spring Boot + Gemini AI + JWT + MySQL, I will provide:\n\n✅ Real AI Responses\n✅ Symptom Analysis\n✅ Medicine Guidance\n✅ Diet Recommendations\n✅ Hospital Suggestions\n✅ Coding Help\n\nYour question has been received successfully.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);

    }, 1500);

  };

  return (

    <div className="ai-page">

      <ChatSidebar />

      <div className="chat-container">

        <ChatHeader />

        {/* Quick Suggestions */}

        <div className="quick-suggestions">

          {

            quickSuggestions.map((item, index) => (

              <button
                key={index}
                className="suggestion-chip"
                onClick={() => sendMessage(item)}
              >

                {item}

              </button>

            ))

          }

        </div>

        {/* Messages */}

        <div className="messages">

          {

            messages.map((msg, index) => (

              <ChatMessage

                key={index}

                sender={msg.sender}

                text={msg.text}

                time={msg.time}

              />

            ))

          }

          {typing && <TypingLoader />}

          <div ref={messagesEndRef}></div>

        </div>

        {/* Chat Input */}

        <ChatInput

          message={message}

          setMessage={setMessage}

          sendMessage={sendMessage}

        />

      </div>

    </div>

  );

}

export default AIAssistant;