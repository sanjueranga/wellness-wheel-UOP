"use client";
import React from 'react';
import Chart from 'chart.js/auto';


interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
  }[];
}

const RadarChart: React.FC = () => {
  const chartData: ChartData = {
    labels: ['Eating', 'Sleeping', 'Working', 'Playing', 'Studying'],
    datasets: [
      {
        label: 'My Activity',
        data: [80, 70, 50, 30, 90],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E74C3C'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E74C3C'],
      },
    ],
  };

  const chartOptions = {
    title: {
      display: true,
      text: 'My Daily Activity',
    },
    scale: {
      ticks: {
        beginAtZero: true,
      },
      angleLines: {
        display: false,
      },
    },
  };

  let chartInstance: Chart | null = null;

  React.useEffect(() => {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    chartInstance = new Chart(ctx, {
      type: 'radar',
      data: chartData,
      // options: chartOptions,
    });
  }, []);

  React.useEffect(() => {
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); 
      }
    };
  }, []);

  return (
    <div>
      <h1>Score</h1>
      <canvas id="radarChart" style={{height:'600px', width:'600px'}}></canvas>
    </div>
  );
};

export default RadarChart;

