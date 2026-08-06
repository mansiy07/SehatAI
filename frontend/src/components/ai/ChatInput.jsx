// ==========================================
// Chat Input
// ==========================================

import "../../styles/ai/ChatInput.css";

import {
  FaPaperPlane,
  FaPaperclip,
  FaMicrophone,
  FaSmile
} from "react-icons/fa";

function ChatInput({

  message,
  setMessage,
  sendMessage

}) {

  return (

    <div className="chat-input">

      <button className="icon-btn">

        <FaPaperclip />

      </button>

      <button className="icon-btn">

        <FaMicrophone />

      </button>

      <button className="icon-btn">

        <FaSmile />

      </button>

      <input

        type="text"

        placeholder="Ask anything..."

        value={message}

        onChange={(e)=>setMessage(e.target.value)}

        onKeyDown={(e)=>{

          if(e.key==="Enter"){

            sendMessage();

          }

        }}

      />

      <button

        className="send-btn"

        onClick={sendMessage}

      >

        <FaPaperPlane />

      </button>

    </div>

  );

}

export default ChatInput;