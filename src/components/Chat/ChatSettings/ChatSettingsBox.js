import React, { useState } from "react";
// import { ChatSettingsBox } from "semantic-ui-react";
// import { ChatEngine } from "react-chat-engine";
const ChatSettingsBox = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleChatOpen = () => {
        setChatOpen(!chatOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;
        setMessages([...messages, message]);
        e.target.elements.message.value = "";
    };

    return (
      
      <div className="ce-wrapper">
        {/* <ChatEngine/> */}
        <div>
            <button onClick={handleChatOpen}>Open Chat</button>
            {chatOpen && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="message" placeholder="Enter message..." />
                        <button type="submit">Send</button>
                    </form>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}>{message}</div>
                        ))}
                    </div>
                </div>
            
            )}
        </div>
        </div>
        
    );
    
};
export default ChatSettingsBox;