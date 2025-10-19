import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated data — we’ll connect to live Manitoba prices later
    setData([
      { date: "Oct 13", wheat: 9.25, canola: 14.8, soybeans: 13.4 },
      { date: "Oct 14", wheat: 9.3, canola: 15.0, soybeans: 13.5 },
      { date: "Oct 15", wheat: 9.4, canola: 15.2, soybeans: 13.7 },
      { date: "Oct 16", wheat: 9.35, canola: 15.1, soybeans: 13.6 },
      { date: "Oct 17", wheat: 9.45, canola: 15.3, soybeans: 13.8 },
      { date: "Oct 18", wheat: 9.55, canola: 15.5, soybeans: 13.9 },
      { date: "Oct 19", wheat: 9.6, canola: 15.6, soybeans: 14.0 },
    ]);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🌾 Manitoba Grain Prices (7-Day Trend)</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wheat" stroke="#8884d8" name="Wheat ($/bu)" />
          <Line type="monotone" dataKey="canola" stroke="#82ca9d" name="Canola ($/bu)" />
          <Line type="monotone" dataKey="soybeans" stroke="#ffc658" name="Soybeans ($/bu)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
