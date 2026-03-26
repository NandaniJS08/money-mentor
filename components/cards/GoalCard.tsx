type Props = {
  title: string;
  current: number;
  target: number;
};

export default function GoalCard({ title, current, target }: Props) {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    // Changed bg-gray-300 to bg-transparent to fix the "white box" issue
    <div className="p-0 bg-transparent group">
      <div className="flex justify-between items-end mb-2">
        <div>
          {/* Title: Pure white in dark mode */}
          <h3 className="text-sm font-bold text-slate-500 dark:text-white transition-colors">
            {title}
          </h3>
          {/* Amounts: Silver/Gray in dark mode for hierarchy */}
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
            ₹{current.toLocaleString()} <span className="opacity-40">/</span> ₹{target.toLocaleString()}
          </p>
        </div>
        
        {/* Percentage Label: Bold and White */}
        <span className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
          {Math.round(percentage)}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-slate-200 dark:bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
        <div
          className="bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(99,102,241,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Subtext: High visibility gray */}
      <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-wider">
        {percentage >= 100 ? "Goal Reached! 🎉" : "Keep going"}
      </p>
    </div>
  );
}