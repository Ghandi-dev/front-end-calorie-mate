import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Load `react-chartjs-2` secara dinamis untuk menghindari SSR errors
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

// Definisi tipe data untuk props
interface DailyData {
  date: string;
  weight: number;
  totalCaloriesIn: number;
  totalCaloriesOut: number;
}

interface ChartDailyProps {
  data: DailyData[];
}

const ChartDailyLog: React.FC<ChartDailyProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map((entry) => entry.date);
      const weights = data.map((entry) => entry.weight);
      const caloriesIn = data.map((entry) => entry.totalCaloriesIn);
      const caloriesOut = data.map((entry) => entry.totalCaloriesOut);

      setChartData({
        labels,
        datasets: [
          {
            label: "Weight (kg)",
            data: weights,
            borderColor: "#2196F3", // Biru Primer (Energi & Fokus)
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            tension: 0.3,
          },
          {
            label: "Calories In",
            data: caloriesIn,
            borderColor: "#4CAF50", // Hijau (Sehat)
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            tension: 0.3,
          },
          {
            label: "Calories Out",
            data: caloriesOut,
            borderColor: "#E91E63", // Pink Kuat (Highlight / Aksen)
            backgroundColor: "rgba(233, 30, 99, 0.2)",
            tension: 0.3,
          },
        ],
      });
    }
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { mode: "index" as const, intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-auto h-96 p-4 bg-white shadow-sm rounded-lg">
      {chartData ? <Line data={chartData} options={options} style={{ maxWidth: "100%" }} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default ChartDailyLog;
