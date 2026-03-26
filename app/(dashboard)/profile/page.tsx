"use client";

import { useState } from "react";
import { 
  User, Target, Settings, Camera, Shield, Bell, 
  Globe, Lock, Trash2, Save, Check, Wallet, 
  Briefcase, GraduationCap, Calendar, PieChart 
} from "lucide-react";

export default function ProfilePage() {
  // --- FORM STATES ---
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    whatsapp: true // Popular in India
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedPulse, setShowSavedPulse] = useState(false);

  // Data from Onboarding / Indian Context
  const [formData, setFormData] = useState({
    fullName: "Elon Musk",
    age: "20",
    annualIncome: "1200000", // 12 Lakhs
    monthlyExpense: "45000",
    goal: "Buying a Flat",
    experience: "Intermediate"
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSavedPulse(true);
      setTimeout(() => setShowSavedPulse(false), 2000);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col gap-1 px-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
          Profile & Preferences
        </h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your Indian financial identity and AI preferences.</p>
      </div>

      {/* 1. PERSONAL IDENTITY */}
      <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm transition-colors">
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                AS
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                <Camera size={24} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{formData.fullName}</h3>
              <p className="text-sm text-slate-500">Age: {formData.age} • Mumbai, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <User size={12} /> Full Name
              </label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Calendar size={12} /> Age
              </label>
              <input 
                type="number" 
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white outline-none focus:border-indigo-500 transition-all" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FINANCIAL FOOTPRINT (ONBOARDING DATA) */}
      <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm transition-colors">
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
            <Briefcase size={20} className="text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Financial Profile (INR)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Annual Income (₹)</label>
              <input 
                type="text" 
                value={formData.annualIncome}
                onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white font-mono" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Avg. Monthly Expense (₹)</label>
              <input 
                type="text" 
                value={formData.monthlyExpense}
                onChange={(e) => setFormData({...formData, monthlyExpense: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white font-mono" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Financial Goal</label>
              <select 
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white outline-none"
              >
                <option>Buying a Flat</option>
                <option>Retirement (Fire)</option>
                <option>Child's Education</option>
                <option>International Travel</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Knowledge Level</label>
              <div className="flex gap-2 p-1 bg-slate-100 dark:bg-[#08080A] rounded-xl border border-slate-200 dark:border-white/5">
                {['Beginner', 'Mid', 'Pro'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setFormData({...formData, experience: lvl})}
                    className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${formData.experience === lvl ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOTIFICATION PREFERENCES */}
      <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm transition-colors">
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
            <Bell size={20} className="text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notification Channels</h3>
          </div>

          <div className="space-y-3">
            {[
              { id: 'push', label: 'In-App Notifications', desc: 'Alerts for large spending in Dashboard', state: notifications.push },
              { id: 'whatsapp', label: 'WhatsApp Updates', desc: 'Get weekly AI summaries on WhatsApp', state: notifications.whatsapp },
              { id: 'email', label: 'Email Reports', desc: 'Monthly tax and investment breakdown', state: notifications.email }
            ].map((n) => (
              <div key={n.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{n.label}</p>
                  <p className="text-xs text-slate-500">{n.desc}</p>
                </div>
                <button 
                  onClick={() => setNotifications({...notifications, [n.id]: !n.state})}
                  className={`w-12 h-6 rounded-full transition-all relative flex items-center px-1 ${n.state ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-white/10'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${n.state ? 'translate-x-6' : 'translate-x-0 shadow-sm'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DANGER ZONE */}
      <section className="p-8 rounded-3xl border border-rose-500/20 bg-rose-500/5 flex flex-col md:flex-row items-center justify-between gap-4 group">
        <div>
          <h3 className="text-rose-500 font-bold flex items-center gap-2">
            <Trash2 size={18} /> Reset All Data
          </h3>
          <p className="text-xs text-slate-500 mt-1">Wipe your Indian bank connections and financial history. This cannot be undone.</p>
        </div>
        <button className="px-8 py-3 bg-white dark:bg-[#08080A] border border-rose-500/30 text-rose-500 rounded-2xl text-xs font-bold hover:bg-rose-500 hover:text-white transition-all shadow-sm">
          Wipe Data
        </button>
      </section>

      {/* FLOATING ACTION BAR */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 z-50">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-bold shadow-2xl transition-all transform active:scale-95
            ${showSavedPulse ? 'bg-emerald-500 text-white w-64 justify-center' : 'bg-indigo-600 text-white hover:bg-indigo-500 w-64 justify-center'}`}
        >
          {isSaving ? (
             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : showSavedPulse ? (
            <><Check size={20} className="animate-bounce" /> Profile Updated</>
          ) : (
            <><Save size={20} /> Save All Changes</>
          )}
        </button>
      </div>
    </div>
  );
}