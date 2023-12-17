"use client";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getMe, getUser } from "@/config/api";
import styles from "./styles.module.css";

import "@/styles/globals.css";
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
  const [physicalScore, setPhysicalScore] = useState();
  const [intellectualScore, setIntellectualScore] = useState();
  const [occupationalScore, setOccupationalScore] = useState();
  const [financialScore, setFinancialScore] = useState();
  const [environmentalScore, setEnvironmentalScore] = useState();
  const [emotionalScore, setEmotionalScore] = useState();
  const [socialScore, setSocialScore] = useState();
  const [spiritualScore, setSpiritualScore] = useState();

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

      setPhysicalScore(physicalScore);
      setIntellectualScore(intellectualScore);
      setOccupationalScore(occupationalScore);
      setFinancialScore(financialScore);
      setEnvironmentalScore(environmentalScore);
      setEmotionalScore(emotionalScore);
      setSocialScore(socialScore);
      setSpiritualScore(spiritualScore);

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
          label: "My Test 2",
          data: [
            // data.physicalScore,
            // data.intellectualScore,
            // data.occupationalScore,
            // data.financialScore,
            // data.environmentalScore,
            // data.emotionalScore,
            // data.socialScore,
            // data.spiritualScore,
            3, 12, 5, 7, 14, 8, 18, 2,
          ],
          backgroundColor: [
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
            "rgba(142, 68, 173, 0.5)",
          ],
          borderColor: [
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
            "#8E44AD",
          ],
        },
        {
          label: "My Test 1",
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
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
            "rgba(50, 163, 127, 0.5)",
          ],
          borderColor: [
            "#32a37f",
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
    // below is he HTML content of the results page

    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className="text-emerald-400 text-3xl font-bold pb-4">Summary</h1>
        <ul className="list-disc pl-10 pb-4">
          <li>Physical Score: {physicalScore}</li>
          <li>Intellectual Score: {intellectualScore}</li>
          <li>Occupational Score: {occupationalScore}</li>
          <li>Financial Score: {financialScore}</li>
          <li>Environmental Score: {environmentalScore}</li>
          <li>Emotional Score: {emotionalScore}</li>
          <li>Social Score: {socialScore}</li>
          <li>Spiritual Score: {spiritualScore}</li>
        </ul>
        <p className="pb-4">
          Now that you have taken the wellness assessment, Lets device an action
          plan to improve the main areas you want to work on to enhance your
          wellness and achieve a state of balance and contentment to unlock the
          potential to thrive for best.
        </p>
        <h4 className="underline pb-2">Results Analysis for each component</h4>
        <p className="font-bold">Scores of 15 - 20:</p>
        <p className="pb-4">
          Excellent! You are already taking positive steps in the considered
          dimension of wellness. You're thriving to achieve the best and
          probably are motivating those around you. However, remember you always
          can improve and also, you may want to check for low scores on specific
          items to see if there are focus areas you can particularly improve.
          Wellness is all about balance, so check other areas where more focus
          is required.
        </p>
        <p className="font-bold">Scores of 10 - 15:</p>
        <p className="pb-4">
          Steps that you have taken seems to be in the right direction and
          commendable. You can aim for improvement. Focus on individual items to
          see different actions you can device based on the identified
          strengths. A small change in behavior can help you achieve better
          wellness scores.
        </p>
        <p className="font-bold">Scores of 05 - 10:</p>
        <p className="pb-4">
          Even though you seems to have taken steps considering your wellness,
          they seems to have a lot of room for improvement. Focus on individual
          items to see different actions you can device based on the identified
          strengths. You might need some notable changes in behavior can help
          you achieve better wellness scores.
        </p>
        <p className="font-bold">Scores of 05 and below</p>
        <p className="pb-4">
          Some potential health and wellness risks are indicated in taking the
          survey. Review each of those areas where you scored are extremely
          lower and review resources to help you develop and set achievable
          goals. If you want help deciding to make a change, contact us at
          xxxxxx
        </p>
        <button className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600 mr-10">
          Download PDF
        </button>
        <button className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600">
          Send an Email
        </button>
      </div>
      <div className="right-side">
        <canvas id="radarChart"></canvas>
      </div>
    </div>
  );
};

export default RadarChart;
