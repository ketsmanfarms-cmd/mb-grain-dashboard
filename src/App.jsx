import { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Temporary placeholder data for 7-day trend
    setData([
      { date: "Oct 13", Wheat: 8.40, Canola: 15.20, Oats: 4.10 },
      { date: "Oct 14", Wheat: 8.45, Canola: 15.30, Oats: 4.05 },
      { date: "Oct 15", Wheat: 8.50, Canola: 15.25, Oats: 4.00 },
      { date: "Oct 16", Wheat: 8.48, Canola: 15.40, Oats: 4.12 },
      { date: "Oct 17", Wheat: 8.53, Canola: 15.45, Oats: 4.08 },
      { date: "Oct 18", Wheat: 8.60, Canola: 15.50, Oats: 4.15 },
      { date: "Oct 19", Wheat: 8.55, Canola: 15.55, Oats: 4.10 }
    ]);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>📊 Manitoba Grain Prices (7-Day Trend)</h1>
      <LineChart width={350} height={250} data={data} style={{ margin: "0 auto" }}>
        <Line type="monotone" dataKey="Wheat" stroke="#8884d8" />
        <Line type="monotone" dataKey="Canola" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Oats" stroke="#ffc658" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}
