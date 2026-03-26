const data = [
  { name: "Food", amount: 8000, percent: "26%" },
  { name: "Rent", amount: 15000, percent: "50%" },
  { name: "Travel", amount: 4000, percent: "13%" },
  { name: "Shopping", amount: 3000, percent: "11%" },
];

export default function CategoryTable() {
  return (
    <table className="w-full text-xs">
      <thead className="text-gray-400">
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-t">
            <td>{item.name}</td>
            <td>₹{item.amount}</td>
            <td>{item.percent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}