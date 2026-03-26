"use client";

const transactions = [
  { id: 1, name: "Groceries", amount: 2000, type: "expense" },
  { id: 2, name: "Salary", amount: 50000, type: "income" },
  { id: 3, name: "Rent", amount: 15000, type: "expense" },
  { id: 4, name: "Freelance", amount: 10000, type: "income" },
];

export default function TransactionTable() {
  return (
    <div className="bg-transparent w-full overflow-hidden">
      {/* Title: Pure White in Dark Mode */}
      <h2 className="text-xl font-bold mb-6 text-slate-600 dark:text-white px-1">
        Transaction History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Header: Silver/Light Grey in Dark Mode for high contrast */}
            <tr className="text-slate-500 dark:text-slate-300 text-xs uppercase tracking-widest border-b border-slate-200 dark:border-white/20">
              <th className="pb-4 font-bold px-2">Name</th>
              <th className="pb-4 font-bold px-2">Amount</th>
              <th className="pb-4 font-bold px-2">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-white/10">
            {transactions.map((tx) => (
              <tr 
                key={tx.id} 
                className="group transition-colors hover:bg-white/5"
              >
                {/* Transaction Name: Bright White in Dark Mode */}
                <td className="py-4 px-2 text-sm font-medium text-slate-400 dark:text-slate-100">
                  {tx.name}
                </td>

                {/* Amount: Pure White in Dark Mode */}
                <td className="py-4 px-2 text-sm font-bold text-slate-500 dark:text-white">
                  ₹{tx.amount.toLocaleString("en-IN")}
                </td>

                <td className="py-4 px-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      tx.type === "income"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}