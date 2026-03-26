"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Bot, User, Send, Sparkles, 
  TrendingDown, ShieldCheck, Zap, 
  MessageSquare, PieChart, Info 
} from "lucide-react";

export default function MentorPage() {
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Namaste Aryan! 👋 I've analyzed your portfolio. You have ₹15.5L in liabilities and ₹58L in assets. Your Net Worth is looking healthy, but your 'Emergency Fund' is a bit low for your ₹45k monthly expense. How can I help you optimize today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    // Simulate AI thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "That's a great question about your Home Loan. Based on your ₹1.2L monthly income, increasing your EMI by just ₹5,000 could save you ₹4L in interest over 10 years. Would you like to see the calculation?" 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-5xl mx-auto gap-4 animate-in fade-in duration-500">
      
      {/* 1. MENTOR HEADER / STATUS */}
      <div className="bg-white dark:bg-[#1C1F26] p-4 rounded-3xl border border-slate-200 dark:border-white/5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg">
              <Bot size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-[#1C1F26] rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Money Mentor <Sparkles size={14} className="text-amber-500" />
            </h2>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">AI Advisor Online</p>
          </div>
        </div>

        <div className="hidden md:flex gap-2">
          <div className="px-4 py-2 bg-slate-50 dark:bg-[#08080A] rounded-xl border border-slate-200 dark:border-white/5 text-center">
             <p className="text-[8px] text-slate-400 uppercase font-bold">Risk Level</p>
             <p className="text-xs font-bold text-amber-500">Moderate</p>
          </div>
          <div className="px-4 py-2 bg-slate-50 dark:bg-[#08080A] rounded-xl border border-slate-200 dark:border-white/5 text-center">
             <p className="text-[8px] text-slate-400 uppercase font-bold">Savings Rate</p>
             <p className="text-xs font-bold text-indigo-600">32%</p>
          </div>
        </div>
      </div>

      {/* 2. CHAT AREA */}
      <div className="flex-1 bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm overflow-hidden flex flex-col">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-3`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0">
                  <Bot size={16} />
                </div>
              )}
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-xs
                ${msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-slate-50 dark:bg-[#08080A] text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-white/5'}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* 3. SUGGESTION CHIPS */}
        <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {["Analyze Debt", "Tax Saving Plan", "Retirement Goal", "Emergency Fund"].map((chip) => (
            <button 
              key={chip}
              onClick={() => setInput(chip)}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-[10px] font-bold text-slate-500 hover:border-indigo-500 hover:text-indigo-500 transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* 4. INPUT AREA */}
        <div className="p-4 bg-slate-50/50 dark:bg-white/2 border-t border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2 bg-white dark:bg-[#08080A] border border-slate-200 dark:border-white/10 p-2 rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your ₹ portfolio..."
              className="flex-1 bg-transparent px-3 py-2 outline-none text-sm text-slate-900 dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-center text-[9px] text-slate-400 mt-3 flex items-center justify-center gap-1 uppercase tracking-widest font-bold">
            <ShieldCheck size={10} /> AI can make mistakes. Consult a CFP for final decisions.
          </p>
        </div>
      </div>
    </div>
  );
}