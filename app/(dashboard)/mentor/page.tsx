"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Sparkles, MoreHorizontal } from "lucide-react";

// --- Types ---
interface Message {
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

export default function RealChatbot() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Namaste Aryan! 👋 I've analyzed your portfolio. Your Net Worth is looking healthy, but your 'Emergency Fund' is a bit low. How shall we optimize today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  // Auto-scroll logic with smooth timing
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI delay with a natural feel
    setTimeout(() => {
      const aiMsg: Message = { 
        role: "assistant", 
        content: "That's a smart move. Increasing your SIP by 10% now could result in an extra ₹12L by retirement. Would you like to see the breakdown?", 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col w-full max-w-4xl mx-auto h-[85vh]"
    >
      
      {/* --- GLASS CONTAINER --- */}
      <div className={`relative flex flex-col h-full rounded-[2.5rem] border overflow-hidden transition-all duration-700 ${
        isDark 
          ? "bg-[#0B0F1A]/70 backdrop-blur-2xl border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.1)]" 
          : "bg-white/90 border-slate-200 shadow-2xl"
      }`}>
        
        {/* HEADER */}
        <div className={`p-6 flex items-center justify-between border-b ${isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50/50"}`}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/40"
              >
                <Bot className="text-white w-6 h-6" />
              </motion.div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#0B0F1A] rounded-full" />
            </div>
            <div>
              <h3 className={`font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}>Money Mentor ✨</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[10px] text-green-500 font-black uppercase tracking-[0.2em]">Active Now</p>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles size={20} className={isDark ? "text-indigo-400" : "text-indigo-600"} />
          </motion.div>
        </div>

        {/* MESSAGES AREA */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          <AnimatePresence mode="popLayout">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 
                }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                  msg.role === 'assistant' 
                    ? "bg-indigo-600/10 text-indigo-500 border border-indigo-500/20" 
                    : "bg-slate-800 text-white"
                }`}>
                  {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                </motion.div>

                {/* Bubble */}
                <div className={`relative max-w-[80%] p-5 rounded-[1.8rem] text-sm leading-relaxed shadow-sm ${
                  msg.role === 'assistant'
                    ? (isDark ? "bg-[#161B29] border border-white/10 text-slate-200 rounded-tl-none" : "bg-slate-100 text-slate-800 rounded-tl-none")
                    : "bg-indigo-600 text-white shadow-indigo-500/20 rounded-tr-none"
                }`}>
                  {msg.content}
                  <span className={`block text-[10px] mt-3 font-medium opacity-50 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20">
                  <Bot size={20} className="text-indigo-500" />
                </div>
                <div className={`px-6 py-4 rounded-2xl rounded-tl-none flex items-center gap-1 ${isDark ? "bg-[#161B29]" : "bg-slate-100"}`}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      />
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* INPUT AREA */}
        <motion.div 
          layout
          className={`p-8 border-t ${isDark ? "border-white/10" : "border-slate-100"}`}
        >
          <div className="relative group flex items-center gap-3">
            <div className="relative flex-1">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your SIP, Taxes, or Goals..."
                className={`w-full p-5 pr-14 rounded-2xl outline-none transition-all border-2 ${
                  isDark 
                    ? "bg-white/5 border-white/5 text-white focus:border-indigo-500/40" 
                    : "bg-slate-50 border-slate-100 text-slate-900 focus:border-indigo-500/40"
                }`}
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-indigo-600 rounded-2xl text-white hover:bg-indigo-500 disabled:opacity-30 disabled:grayscale transition-all shadow-xl shadow-indigo-600/20"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}