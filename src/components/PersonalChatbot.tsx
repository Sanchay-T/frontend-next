"use client";

import React, { useState, useEffect, useRef } from 'react';
import { PlusIcon, Mic, Loader, Calendar, Cloud, FileText, Search, Zap, MessageSquare, X, Moon, Sun, Download, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolResponses?: Array<{ name: string; response: string }>;
}

const QuickActionButton: React.FC<{ icon: React.ElementType; label: string; onClick: () => void }> = ({ icon: Icon, label, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full px-4 py-2 transition-all duration-300"
  >
    <Icon size={16} />
    <span>{label}</span>
  </motion.button>
);

const OnboardingTutorial: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [step, setStep] = useState(0);
    const steps = [
      { title: "Welcome!", content: "Let's take a quick tour of your new AI assistant." },
      { title: "Ask Anything", content: "Type your questions or commands in the input box at the bottom." },
      { title: "Quick Actions", content: "Use these buttons for common tasks like checking your schedule or weather." },
      { title: "Voice Input", content: "Click the microphone icon to use voice input for your queries." },
      { title: "You're All Set!", content: "Feel free to start chatting with your AI assistant now!" }
    ];
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">{steps[step].title}</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">{steps[step].content}</p>
          <div className="flex justify-between">
            {step > 0 && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(step - 1)} 
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
              >
                Previous
              </motion.button>
            )}
            {step < steps.length - 1 ? (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(step + 1)} 
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded"
              >
                Next
              </motion.button>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose} 
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded"
              >
                Get Started
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

const Message: React.FC<{ message: Message; isLast: boolean }> = ({ message, isLast }) => (
    <div className={`message ${message.role === 'user' ? 'message-user' : 'message-assistant'} p-4 rounded-lg`}>
      <ReactMarkdown>{message.content}</ReactMarkdown>
      {message.toolResponses && (
        <div className="mt-2 space-y-2">
          {message.toolResponses.map((tool, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-2 rounded">
              <strong>{tool.name}:</strong> {tool.response}
            </div>
          ))}
        </div>
      )}
    </div>
);
  
  
  
  


const PersonalChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('chatHistory');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    const onboardingDone = localStorage.getItem('onboardingDone');
    return onboardingDone !== 'true';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (messages.length > 0) {
      setShowWelcome(false);
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closeOnboarding = () => {
    localStorage.setItem('onboardingDone', 'true');
    setShowOnboarding(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // const startListening = () => {
  //   setIsListening(true);
  //   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  //   if (SpeechRecognition) {
  //     const recognition = new SpeechRecognition();
  //     recognition.onresult = (event) => {
  //       const transcript = event.results[0][0].transcript;
  //       setInput(transcript);
  //       setIsListening(false);
  //     };
  //     recognition.start();
  //   } else {
  //     alert('Speech recognition is not supported in this browser.');
  //     setIsListening(false);
  //   }
  // };

  const exportChat = () => {
    const chatText = messages.map(m => `${m.role}: ${m.content}`).join('\n\n');
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_history.txt';
    a.click();
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    // Simulate API call and tool usage
    setTimeout(async () => {
      const botResponse = await generateResponse(input);
      setMessages(prev => [...prev, botResponse]);
      setIsThinking(false);
      playVoiceResponse(botResponse.content);
    }, 2000);
  };

  const generateResponse = async (userInput: string): Promise<Message> => {
    // Simulate response generation with tool usage
    const toolResponses = [
      { name: 'Calendar', response: 'You have a meeting at 3 PM today.' },
      { name: 'Weather', response: 'It\'s currently 72°F and sunny.' },
      { name: 'Notes', response: 'Last note: Remember to buy groceries.' },
    ];

    return {
      role: 'assistant',
      content: `Here's what I found for "${userInput}":`,
      toolResponses: toolResponses
    };
  };

  const playVoiceResponse = async (text: string) => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    handleSubmit();
  };

  return (
    <div className={`flex flex-col h-[700px] w-full chat-container ${darkMode ? 'dark' : ''}`}> {/* Update this line */}

      {showOnboarding && <OnboardingTutorial onClose={closeOnboarding} />}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        {showWelcome && (
          <div className="text-center py-10 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Personal AI Assistant</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">I'm here to help you with various tasks. What would you like to do?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <QuickActionButton icon={Calendar} label="Check Schedule" onClick={() => handleQuickAction("What's on my schedule today?")} />
              <QuickActionButton icon={Cloud} label="Get Weather" onClick={() => handleQuickAction("What's the weather like today?")} />
              <QuickActionButton icon={FileText} label="View Notes" onClick={() => handleQuickAction("Show me my recent notes")} />
              <QuickActionButton icon={MessageSquare} label="Chat" onClick={() => handleQuickAction("Let's have a conversation")} />
            </div>
          </div>
        )}
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Message message={message} isLast={index === messages.length - 1} />
            </motion.div>
          ))}
        </AnimatePresence>
        {isThinking && (
          <div className="flex items-center space-x-2 text-gray-600 animate-fade-in">
            <Loader className="animate-spin" />
            <span>Thinking...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Ask me anything..."
            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full py-3 pl-12 pr-24 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all duration-300"
          />
          <PlusIcon className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <div className="absolute right-2 top-2 flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmit}
              className="bg-black dark:bg-white text-white dark:text-black rounded-full p-2 transition-all duration-300"
            >
              <Send size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="fixed top-4 right-4 flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-black dark:text-white transition-all duration-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={exportChat}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-black dark:text-white transition-all duration-300"
        >
          <Download size={20} />
        </motion.button>
      </div>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-4 right-4 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg"
        >
          <Mic size={24} />
        </motion.div>
      )}
    </div>
  );
};

export default PersonalChatbot;
  