"use client";

import { useState } from "react";
import {
    TrendingUp, Home, Landmark, ShieldCheck,
    AlertCircle, Plus, IndianRupee,
    Briefcase, BarChart4, Save, Check, Coins, HeartPulse, GraduationCap ,Lock as LockIcon
} from "lucide-react";

export default function PortfolioPage() {
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1200);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* 1. DATA ACCURACY TRACKER (Replaces Dashboard-style Cards) */}
            <div className="bg-white dark:bg-[#1C1F26] p-6 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-indigo-600/10 rounded-2xl text-indigo-600">
                        <BarChart4 size={28} />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">AI Analysis Accuracy</h2>
                        <p className="text-sm text-slate-500">Fill all sections for a 100% accurate financial plan</p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                    <div className="flex justify-between w-full mb-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data Maturity</span>
                        <span className="text-xs font-bold text-indigo-600">75%</span>
                    </div>
                    <div className="w-full md:w-64 h-3 bg-slate-100 dark:bg-[#08080A] rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="w-[75%] h-full bg-linear-to-r from-indigo-600 to-indigo-400 rounded-full transition-all duration-1000" />
                    </div>
                </div>
            </div>

            {/* 🛡️ IDENTITY & KYC SECTION - Premium Indian Style */}
<section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm transition-all">
  <div className="p-8 space-y-8">
    
    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-5">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-600/10 rounded-lg text-indigo-600">
          <ShieldCheck size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Identity & Tax Verification</h3>
          <p className="text-xs text-slate-500">Required for accurate Indian Tax (TDS) and Credit analysis.</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">AES-256 Encrypted</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* 💳 PAN CARD INTERFACE */}
      <div className="relative group">
        <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-[#1C1F26] text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10">
          Permanent Account Number
        </div>
        <div className="flex items-center bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/10 rounded-2xl p-1 focus-within:border-indigo-500 transition-all">
          <input 
            type="text" 
            maxLength={10}
            placeholder="ABCDE1234F"
            className="flex-1 bg-transparent p-4 text-lg font-mono font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white outline-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
          />
          <button className="mr-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95">
            Verify
          </button>
        </div>
      </div>

      {/* 🆔 AADHAAR CARD INTERFACE */}
      <div className="relative group">
        <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-[#1C1F26] text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10">
          Aadhaar Number (VID)
        </div>
        <div className="flex items-center bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus-within:border-indigo-500 transition-all">
          <div className="flex gap-2 text-lg font-mono text-slate-400 select-none tracking-widest">
            <span>XXXX</span>
            <span>XXXX</span>
          </div>
          <input 
            type="password" 
            maxLength={4}
            placeholder="1234"
            className="flex-1 bg-transparent ml-3 text-lg font-mono font-bold tracking-[0.2em] text-indigo-600 outline-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
          />
          <LockIcon size={16} className="text-slate-300" />
        </div>
        <p className="mt-2 ml-2 text-[10px] text-slate-500 flex items-center gap-1">
          <AlertCircle size={10} /> We follow UIDAI masking guidelines.
        </p>
      </div>

    </div>
  </div>
</section>

            {/* 2. CORE INVESTMENTS (High Growth) */}
            <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors shadow-sm">
                <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
                        <TrendingUp className="text-indigo-600" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Growth Assets (Equity & Real Estate)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PortfolioInput label="Direct Stocks / Shares" placeholder="Current Value" icon={<BarChart4 size={14} />} />
                        <PortfolioInput label="Mutual Funds / SIPs" placeholder="Total Portfolio Value" icon={<TrendingUp size={14} />} />
                        <PortfolioInput label="Real Estate (Market Value)" placeholder="Include Land/Flats" icon={<Home size={14} />} />
                        <PortfolioInput label="Physical Gold / SGB" placeholder="Jewelry or Bonds" icon={<Coins size={14} />} />
                        <PortfolioInput label="Crypto Assets" placeholder="Exchanges/Wallets" icon={<TrendingUp size={14} />} />
                        <PortfolioInput label="Business Equity" placeholder="Ownership Value" icon={<Briefcase size={14} />} />
                    </div>
                </div>
            </section>

            {/* 3. RETIREMENT & TRADITIONAL (India Specific) */}
            <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors shadow-sm">
                <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
                        <Landmark className="text-amber-500" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Retirement & Fixed Savings</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PortfolioInput label="EPF / VPF Balance" placeholder="Employee Provident Fund" color="amber" />
                        <PortfolioInput label="PPF / NPS" placeholder="Public Provident Fund" color="amber" />
                        <PortfolioInput label="Fixed Deposits (FDs)" placeholder="Bank Deposits" color="amber" />
                        <PortfolioInput label="Post Office Savings" placeholder="KVP / NSC / Monthly" color="amber" />
                        <PortfolioInput label="Chit Funds" placeholder="Group Savings" color="amber" />
                    </div>
                </div>
            </section>

            {/* 4. LIABILITIES & EMIs (The "Burden" Section) */}
            <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors shadow-sm">
                <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
                        <AlertCircle className="text-rose-500" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Liabilities (Loans & Dues)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                            <PortfolioInput label="Home Loan Balance" placeholder="Total Outstanding" color="rose" />
                            <div className="flex gap-2 items-center text-[10px] text-rose-500 font-bold ml-1 uppercase">
                                <span className="p-1 bg-rose-500/10 rounded">Monthly EMI: ₹</span>
                                <input type="text" placeholder="Amount" className="bg-transparent border-b border-rose-500/20 outline-none w-20" />
                            </div>
                        </div>
                        <PortfolioInput label="Car / Vehicle Loan" placeholder="Remaining Principal" color="rose" />
                        <PortfolioInput label="Personal / Student Loan" placeholder="Total Due" color="rose" />
                        <PortfolioInput label="Credit Card Dues" placeholder="Total Outstanding" color="rose" />
                    </div>
                </div>
            </section>

            {/* 5. INSURANCE & EMERGENCY (Safety Net) */}
            <section className="bg-white dark:bg-[#1C1F26] rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden transition-colors shadow-sm">
                <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
                        <ShieldCheck className="text-emerald-500" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Family Security & Insurance</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <PortfolioInput label="Emergency Fund" placeholder="Savings in Bank" color="emerald" />
                        <PortfolioInput label="Health Insurance (Sum Insured)" placeholder="Mediclaim Value" color="emerald" icon={<HeartPulse size={14} />} />
                        <PortfolioInput label="Term Insurance Cover" placeholder="Death Benefit Value" color="emerald" icon={<GraduationCap size={14} />} />
                    </div>
                </div>
            </section>

            {/* FLOATING ACTION BAR */}
            <div className="fixed bottom-10 right-10 z-50">
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-bold shadow-2xl transition-all transform active:scale-95
            ${showSuccess ? 'bg-emerald-500 text-white w-72 justify-center' : 'bg-indigo-600 text-white hover:bg-indigo-500 w-72 justify-center'}`}
                >
                    {isSaving ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : showSuccess ? (
                        <><Check size={20} className="animate-bounce" /> Data Saved!</>
                    ) : (
                        <><Save size={20} /> Save Data</>
                    )}
                </button>
            </div>
        </div>
    );
}

// REUSABLE INPUT COMPONENT
function PortfolioInput({ label, placeholder, icon, color = "indigo" }: any) {
    const colorMap: any = {
        indigo: "focus:border-indigo-500 text-slate-900 dark:text-white",
        rose: "focus:border-rose-500 text-rose-600 dark:text-rose-400 font-bold",
        emerald: "focus:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold",
        amber: "focus:border-amber-500 text-amber-600 dark:text-amber-400 font-bold"
    };

    return (
        <div className="space-y-2 group">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 group-focus-within:text-indigo-500 transition-colors">
                {icon} {label}
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">₹</span>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`w-full pl-7 pr-3 py-3 rounded-xl bg-slate-50 dark:bg-[#08080A] border border-slate-200 dark:border-white/5 outline-none transition-all font-mono text-sm shadow-inner ${colorMap[color]}`}
                />
            </div>
        </div>
    );
}