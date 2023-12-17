"use client";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getMe, getUser } from "@/config/api";
import styles from './styles.module.css'


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
  const [userData, setUserData] = useState<any | null>(null);
  const [physical, setPhysical] = useState();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const user: any = getMe();
        const myUser: any = await getUser(user.id);
        const data = await fetchData(myUser);
        setUserData(data);
        updateChart(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataAndSetState();
  }, []);

  const fetchData = async (myUser: any) => {
    try {
      const physicalScore = myUser.user.physical;
      const intellectualScore = myUser.user.intellectual;
      const occupationalScore = myUser.user.occupational;
      const financialScore = myUser.user.financial;
      const environmentalScore = myUser.user.environmental;
      const emotionalScore = myUser.user.emotional;
      const socialScore = myUser.user.social;
      const spiritualScore = myUser.user.spiritual;

      // let total = physicalScore+intellectualScore+occupationalScore+financialScore+environmentalScore+emotionalScore+socialScore+spiritualScore;

      setPhysical(physicalScore);

      return {
        physicalScore,
        intellectualScore,
        occupationalScore,
        financialScore,
        environmentalScore,
        emotionalScore,
        socialScore,
        spiritualScore,
      };
    } catch (e) {
      console.error("Error fetching data: ", e);
      throw e;
    }
  };

  console.log("data", userData);

  const updateChart = (data: any) => {
    const ctx = document.getElementById("radarChart") as HTMLCanvasElement;
    const chartData: ChartData = {
      labels: [
        "Physical",
        "Intellectual",
        "Occupational",
        "Financial",
        "Environmental",
        "Emotional",
        "Social",
        "Spiritual",
      ],
      datasets: [
        {
          label: "My Activity",
          data: [
            data.physicalScore,
            data.intellectualScore,
            data.occupationalScore,
            data.financialScore,
            data.environmentalScore,
            data.emotionalScore,
            data.socialScore,
            data.spiritualScore,
          ],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E74C3C",
            "#8E44AD",
            "#2ECC71",
            "#F39C12",
          ],
          borderColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#E74C3C",
            "#8E44AD",
            "#2ECC71",
            "#F39C12",
          ],
        },
      ],
    };

    let chartInstance: Chart | null = new Chart(ctx, {
      type: "radar",
      data: chartData,
    });

    return chartInstance;
  };

  return (
    <div className="grid grid-rows-2">
      <div>
        <p className={styles.test}>Physical Score: {physical}</p>
      </div>
      <div>
        <canvas
          id="radarChart"
          style={{ height: "600px", width: "600px" }}
        ></canvas>
      </div>
    </div>
  );
};

export default RadarChart;
