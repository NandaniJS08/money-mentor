"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
    TrendingUp, Home, Landmark, ShieldCheck,
    AlertCircle, BarChart4, Save, Check, Coins,
    HeartPulse, GraduationCap, Lock as LockIcon, Sparkles
} from "lucide-react";

// Animation Variants for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 }
    }
}as const;

export default function PortfolioPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = theme === "dark";

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1200);
    };

    if (!mounted) return null;

    const s = {
        card: isDark
            ? "bg-[#0B0F1A]/80 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-white border-slate-200 shadow-sm",
        sectionTitle: isDark ? "text-white" : "text-slate-900",
        subText: isDark ? "text-slate-400" : "text-slate-500",
        inputBg: isDark ? "bg-black/40 border-white/5 shadow-inner" : "bg-slate-50 border-slate-200",
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto space-y-10 pb-32 px-4 pt-4"
        >

            {/* 1. DATA ACCURACY TRACKER */}
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className={`${s.card} p-8 rounded-[2.5rem] border flex flex-col md:flex-row items-center justify-between gap-8`}
            >
                <div className="flex items-center gap-5">
                    <motion.div 
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/20 text-white"
                    >
                        <BarChart4 size={28} />
                    </motion.div>
                    <div>
                        <h2 className={`text-xl font-bold ${s.sectionTitle}`}>AI Analysis Accuracy</h2>
                        <p className={`text-sm ${s.subText}`}>Fill all sections for a 100% accurate financial plan</p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                    <div className="flex justify-between w-full mb-1">
                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">Data Maturity</span>
                        <span className="text-sm font-bold text-indigo-500">75%</span>
                    </div>
                    <div className="w-full md:w-72 h-3 bg-indigo-600/10 rounded-full overflow-hidden p-0.5 border border-indigo-500/10">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, ease: "circOut" }}
                            className="h-full bg-linear-to-r from-indigo-600 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                        />
                    </div>
                </div>
            </motion.div>

            {/* 🛡️ IDENTITY & KYC SECTION */}
            <motion.section variants={itemVariants} className={`${s.card} rounded-[2.5rem] border overflow-hidden`}>
                <div className="p-8 space-y-8">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-500">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold ${s.sectionTitle}`}>Identity & Tax Verification</h3>
                                <p className={`text-xs ${s.subText}`}>Required for accurate Indian Tax (TDS) and Credit analysis.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">AES-256 SECURE</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Permanent Account Number (PAN)</label>
                            <div className={`flex items-center ${s.inputBg} border rounded-2xl p-1.5 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20`}>
                                <input
                                    type="text"
                                    maxLength={10}
                                    placeholder="ABCDE1234F"
                                    className="flex-1 bg-transparent p-3.5 text-lg font-mono font-bold tracking-[0.2em] uppercase text-indigo-500 outline-none placeholder:opacity-20"
                                />
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg">Verify</motion.button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Aadhaar (VID Masked)</label>
                            <div className={`flex items-center ${s.inputBg} border rounded-2xl p-4 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20`}>
                                <div className="flex gap-2 text-lg font-mono text-slate-500/50 select-none tracking-widest mr-3">XXXX XXXX</div>
                                <input
                                    type="password"
                                    maxLength={4}
                                    placeholder="1234"
                                    className="flex-1 bg-transparent text-lg font-mono font-bold tracking-[0.3em] text-indigo-500 outline-none placeholder:opacity-20"
                                />
                                <LockIcon size={18} className="text-slate-500/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 2. ASSETS SECTION */}
            <AssetSection title="Growth Assets" icon={<TrendingUp className="text-indigo-500" />} s={s}>
                <PortfolioInput label="Direct Stocks" placeholder="0.00" icon={<BarChart4 size={14} />} isDark={isDark} />
                <PortfolioInput label="Mutual Funds" placeholder="0.00" icon={<TrendingUp size={14} />} isDark={isDark} />
                <PortfolioInput label="Real Estate" placeholder="0.00" icon={<Home size={14} />} isDark={isDark} />
                <PortfolioInput label="Physical Gold" placeholder="0.00" icon={<Coins size={14} />} isDark={isDark} />
                <PortfolioInput label="Crypto" placeholder="0.00" icon={<Sparkles size={14} />} isDark={isDark} />
                <PortfolioInput label="Business Value" placeholder="0.00" icon={<Landmark size={14} />} isDark={isDark} />
            </AssetSection>

            {/* 3. LIABILITIES SECTION */}
            <AssetSection title="Liabilities & EMIs" icon={<AlertCircle className="text-rose-500" />} s={s}>
                <PortfolioInput label="Home Loan" placeholder="Remaining" color="rose" isDark={isDark} />
                <PortfolioInput label="Vehicle Loan" placeholder="Remaining" color="rose" isDark={isDark} />
                <PortfolioInput label="Credit Card Dues" placeholder="Current" color="rose" isDark={isDark} />
                <PortfolioInput label="Personal Loans" placeholder="Outstanding" color="rose" isDark={isDark} />
            </AssetSection>

            {/* FLOATING ACTION BAR */}
            <div className="fixed bottom-10 right-10 z-50">
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`flex items-center gap-3 px-12 py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all group relative overflow-hidden
                    ${showSuccess ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white'}`}
                >
                    <AnimatePresence mode="wait">
                        {isSaving ? (
                            <motion.div 
                                key="saving"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" 
                            />
                        ) : showSuccess ? (
                            <motion.div key="success" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-3">
                                <Check size={20} className="animate-bounce" /> Saved Successfully
                            </motion.div>
                        ) : (
                            <motion.div key="default" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-3">
                                <Save size={20} /> Sync Portfolio
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </motion.div>
    );
}

// REUSABLE SECTION WRAPPER
function AssetSection({ title, icon, children, s }: any) {
    return (
        <motion.section
            variants={itemVariants}
            className={`${s.card} rounded-[2.5rem] border overflow-hidden`}
        >
            <div className="p-8 space-y-8">
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-5">
                    <motion.div whileHover={{ rotate: 15 }}>{icon}</motion.div>
                    <h3 className={`text-lg font-bold ${s.sectionTitle}`}>{title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {children}
                </div>
            </div>
        </motion.section>
    );
}

// REUSABLE INPUT COMPONENT
function PortfolioInput({ label, placeholder, icon, color = "indigo", isDark }: any) {
    const colorClasses: any = {
        indigo: isDark ? "text-indigo-400" : "text-indigo-600",
        rose: "text-rose-500",
        emerald: "text-emerald-500",
    };

    return (
        <motion.div 
            whileHover={{ y: -2 }}
            className="space-y-3 group"
        >
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 flex items-center gap-2 transition-colors group-focus-within:text-indigo-500">
                {icon} {label}
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm select-none">₹</span>
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`w-full pl-8 pr-4 py-4 rounded-2xl bg-slate-100/50 dark:bg-black/30 border border-slate-200 dark:border-white/5 outline-none transition-all font-mono text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 ${colorClasses[color]}`}
                />
            </div>
        </motion.div>
    );
}