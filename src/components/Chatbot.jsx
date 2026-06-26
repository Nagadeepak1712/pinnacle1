import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: "Hello! I'm the Pinnacle Assistant. How can I help you build your dream project today?",
      suggestions: ["What services do you offer?", "What is the average cost?", "Do you help with bank loans?"]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e, directText = null) => {
    if (e) e.preventDefault();
    const userMessage = (directText || inputValue).trim();
    if (!userMessage) return;
    
    // Add user message to chat
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMessage }]);
    if (!directText) setInputValue("");

    // Simulate typing delay
    setTimeout(() => {
      generateBotResponse(userMessage);
    }, 600);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Simple keyword matching against our 20 FAQs
    let bestMatch = null;
    let highestScore = 0;

    for (const faq of faqData) {
      let score = 0;
      for (const keyword of faq.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          score++;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    }

    let botResponseText = "";
    let nextSuggestions = [];
    
    if (bestMatch && highestScore > 0) {
      botResponseText = bestMatch.answer;
      
      // Pick a few random questions from faqData that aren't the one just asked
      const otherFaqs = faqData.filter(f => f.id !== bestMatch.id);
      const shuffled = otherFaqs.sort(() => 0.5 - Math.random());
      nextSuggestions = shuffled.slice(0, 3).map(f => f.question);
    } else {
      botResponseText = "I'm sorry, I didn't quite catch that. For complex inquiries, please contact us directly on WhatsApp at +91 81900 28664!";
      nextSuggestions = ["How do I start a project with you?", "Where are you located?"];
    }

    setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: botResponseText, suggestions: nextSuggestions }]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-2xl border border-[#b88d44]/30 flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'pointer-events-none' : ''}`}
      >
        <img src="/logo.png" alt="Chat" className="w-10 h-10 object-contain drop-shadow-md" />
        
        {/* Notification Ping Animation */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-[#0b1d35] text-white p-4 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full p-1 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="Pinnacle Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Pinnacle Assistant</h3>
                  <p className="text-[10px] text-[#b88d44] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
              {messages.map((msg, index) => (
                <React.Fragment key={msg.id}>
                  <div 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-[#b88d44] text-white rounded-tr-none' 
                          : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Preloaded Quick Reply Questions (Only show for the last message if it has suggestions) */}
                  {index === messages.length - 1 && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-col gap-2 mt-1 items-start pl-2">
                      <p className="text-xs text-slate-400 mb-1 ml-1">Suggested questions:</p>
                      {msg.suggestions.map((q, i) => (
                        <button 
                          key={i}
                          onClick={() => handleSend(null, q)}
                          className="text-[13px] bg-white border border-[#b88d44]/50 text-[#0b1d35] px-4 py-2 rounded-2xl hover:bg-[#b88d44] hover:text-white transition-colors shadow-sm text-left"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#b88d44] transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-[#0b1d35] text-white flex items-center justify-center shrink-0 hover:bg-[#b88d44] transition-colors disabled:opacity-50 disabled:hover:bg-[#0b1d35]"
              >
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
