"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sun, Moon, Zap, Wallet, TrendingUp, Target, ListChecks } from "lucide-react";
import { useTheme } from "next-themes";
// Components
import CategoryTable from "@/components/tables/CategoryTable";
import SummaryCard from "@/components/cards/SummaryCard";
import HealthScore from "@/components/charts/HealthScore";
import GoalCard from "@/components/cards/GoalCard";
import TransactionTable from "@/components/tables/TransactionTable";
import FinanceMultiChart from "@/components/charts/FinanceMultiChart";

export default function DashboardPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent Hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if current theme is dark
  const isDark = resolvedTheme === "dark";

  // --- THE GRAPHITE THEME LOGIC ---
  const bentoStyle = `
    relative overflow-hidden transition-all duration-300
    ${isDark
      ? "bg-[#1C1F26] border-white/5 shadow-2xl"
      : "bg-white border-slate-200 shadow-sm"}
    border rounded-[24px] p-6 lg:p-8
  `;

  const textMain = isDark ? "text-slate-100" : "text-slate-900";
  const textSub = isDark ? "text-slate-400" : "text-slate-500";

  // If not mounted, return a skeleton or empty div to avoid flicker
  if (!mounted) return <div className="min-h-screen bg-[#121418]" />;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#121418]" : "bg-[#F3F4F6]"}`}>
      <main className="relative z-10 max-w-350 mx-auto p-6 lg:p-10 space-y-8">
        {/* HEADER */}
        <div className="flex justify-between items-center bg-transparent border-b border-slate-800/50 pb-8 mb-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Wallet size={24} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold tracking-tight ${textMain}`}>Wealth Insight</h1>
              <p className={`text-sm ${textSub}`}>Manage your financial ecosystem</p>
            </div>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => router.push("/mentor")}
              className="group relative h-11 px-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-300 active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full] transition-transform duration-500 ease-in-out" />
              <Zap
                size={16}
                className="relative z-10 group-hover:animate-pulse"
                fill="currentColor"
              />
              <span className="relative z-10">AI Analysis</span>
            </button>
          </div>
        </div>

        {/* 3-COLUMN SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={bentoStyle}>
            <SummaryCard title="Current Liquidity" value="₹1,42,000" />
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-500 font-bold">
              <TrendingUp size={14} /> +₹8,200 this week
            </div>
          </div>
          <div className={bentoStyle}>
            <SummaryCard title="Monthly Outflow" value="₹32,400" />
            <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 w-[60%]" />
            </div>
          </div>
          <div className={bentoStyle}>
            <SummaryCard title="Investment Value" value="₹2,10,000" />
            <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Risk Level: Low</p>
          </div>
        </div>

        {/* ANALYTICS HUB */}
        <div className="grid grid-cols-12 gap-6">

          {/* Main Chart Card */}
          <div className={`${bentoStyle} col-span-12 lg:col-span-8`}>
            <div className="flex justify-between items-center mb-8">
              <h3 className={`text-lg font-bold ${textMain}`}>Cashflow Trend</h3>
              <div className="flex bg-slate-800/50 p-1 rounded-lg">
                {['1W', '1M', '3M'].map(t => (
                  <button key={t} className={`px-4 py-1.5 text-[11px] font-bold rounded-md ${t === '1M' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="h-75 w-full">
              <FinanceMultiChart />
            </div>
          </div>

          {/* Health Score Card */}
          <div className={`${bentoStyle} col-span-12 lg:col-span-4 flex flex-col items-center justify-center`}>
            <HealthScore score={72} />
            <div className="mt-6 text-center">
              <h4 className={`text-xl font-bold ${textMain}`}>72% Efficiency</h4>
              <p className={`text-xs mt-2 ${textSub}`}>Your spending is well within limits.</p>
            </div>
          </div>

          {/* RECENT TRACKING (Transaction Table) */}
          <div className={`${bentoStyle} col-span-12 lg:col-span-7 p-0! `}>
            <div className="p-8 border-b border-white/5 flex items-center gap-2">
              <ListChecks size={18} className="text-indigo-400" />
              <h3 className={`font-bold ${textMain}`}>Recent Transactions</h3>
            </div>
            {/* Note: Ensure TransactionTable does not have its own bg-white inside */}
            <div className="p-4">
              <TransactionTable />
            </div>
          </div>

          {/* GOAL TRACKING */}
          <div className={`${bentoStyle} col-span-12 lg:col-span-5`}>
            <div className="flex items-center gap-2 mb-8">
              <Target size={18} className="text-indigo-400" />
              <h3 className={`font-bold ${textMain}`}>Active Goals</h3>
            </div>
            <div className="space-y-8">
              {/* Ensure GoalCard components are set to bg-transparent */}
              <GoalCard title="Emergency Fund" current={30000} target={50000} />
              <GoalCard title="Vacation Fund" current={15000} target={120000} />
              <GoalCard title="Tech Upgrade" current={8000} target={45000} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}