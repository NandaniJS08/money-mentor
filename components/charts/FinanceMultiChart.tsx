"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", emergency: 10000, debt: 20000, investment: 5000, expense: 25000 },
  { name: "Feb", emergency: 15000, debt: 18000, investment: 8000, expense: 27000 },
  { name: "Mar", emergency: 20000, debt: 15000, investment: 12000, expense: 26000 },
  { name: "Apr", emergency: 25000, debt: 12000, investment: 15000, expense: 28000 },
];

// Custom Tooltip to match your glassmorphism
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/10 dark:bg-black/60 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl">
        <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm font-medium" style={{ color: entry.color }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            {entry.name}: ${entry.value.toLocaleString()}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function FinanceMultiChart() {
  return (
    <div className="w-full h-80 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="opacity-10" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'currentColor', fontSize: 12, opacity: 0.5 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'currentColor', fontSize: 12, opacity: 0.5 }} 
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }} />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontWeight: 'bold' }} />

          <Line type="monotone" dataKey="emergency" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: "#22c55e" }} activeDot={{ r: 6, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="debt" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: "#ef4444" }} activeDot={{ r: 6, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="investment" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: "#3b82f6" }} activeDot={{ r: 6, strokeWidth: 0 }} />
          <Line type="monotone" dataKey="expense" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: "#f59e0b" }} activeDot={{ r: 6, strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}