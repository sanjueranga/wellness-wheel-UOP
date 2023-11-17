"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Thing 1",
    "Thing 2",
    "Thing 3",
    "Thing 4",
    "Thing 5",
    "Thing 6",
    "7",
    "8",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3, 4, 6],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div className="grid grid-cols-2">
      <h1 className="text-center">Intepretation of wellness</h1>
      <div>
        <Radar data={data} height={300} width={300} />
      </div>
    </div>
  );
}
