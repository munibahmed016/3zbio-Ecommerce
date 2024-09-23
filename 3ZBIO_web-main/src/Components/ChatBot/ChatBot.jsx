import React from 'react';
import './ChatbotWidget.css'; // Assuming you use this for styles

const ChatbotWidget = () => {
  return (
    <div className="widget-chatbot-container">
      <iframe 
        src="https://bob-5j1s.vercel.app" 
        className="widget-chatbot-iframe" 
        scrolling="no" 
        allow="microphone"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default ChatbotWidget;
