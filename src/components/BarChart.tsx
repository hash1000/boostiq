"use client"; // If using Next.js

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyBarChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Study Hours",
        data: [3, 6, 4, 3, 6, 4, 3], // Example data points
        backgroundColor: [
          "#dc1717",
          "#a5f3ff",
          "#b735f4",
          "#dc1717",
          "#a5f3ff",
          "#b735f4",
          "#dc1717"
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend if not needed
      title: { display: true },
    },
    scales: {
      x: { 
        ticks: { display: false }, // Remove X-axis labels (days)
        grid: { display: false }   // Hide X-axis grid lines
      }, 
      y: {
        beginAtZero: true,
        ticks: { display: false }, // Remove Y-axis labels (numbers)
        grid: { drawBorder: false, display: false }, // Hide Y-axis grid lines
      },
    },
  };

  return (
    <div className="w-full mx-auto p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyBarChart;
