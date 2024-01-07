"use client";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getMe, getSubmission } from "@/config/api";
import styles from "./styles.module.css";

import "@/styles/globals.css";
import Link from "next/link";
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
  const [physicalScore, setPhysicalScore] = useState();
  const [intellectualScore, setIntellectualScore] = useState();
  const [occupationalScore, setOccupationalScore] = useState();
  const [financialScore, setFinancialScore] = useState();
  const [environmentalScore, setEnvironmentalScore] = useState();
  const [emotionalScore, setEmotionalScore] = useState();
  const [socialScore, setSocialScore] = useState();
  const [spiritualScore, setSpiritualScore] = useState();
  const [userData, setUserData] = useState<any | null>(null);



  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const user: any = getMe();
        // const myUser: any = await getUser(user.id);
        const myData = await getSubmission();
        const mySubmission = myData.submissions;
        setPhysicalScore(mySubmission[0].physical);
        setIntellectualScore(mySubmission[0].intellectual);
        setOccupationalScore(mySubmission[0].occupational);
        setFinancialScore(mySubmission[0].financial);
        setEnvironmentalScore(mySubmission[0].environmental);
        setEmotionalScore(mySubmission[0].emotional);
        setSocialScore(mySubmission[0].social);
        setSpiritualScore(mySubmission[0].spiritual);

        // console.log("sub: " + myUser.submissions[0].emotional);
        // const data = await fetchData(myUser);
        // console.log("data: " + data);
        // setUserData(data);
        const data = {
          "physical": mySubmission[0].physical,
          "intellectual": mySubmission[0].intellectual,
          "occupational": mySubmission[0].occupational,
          "financial": mySubmission[0].financial,
          "environmental": mySubmission[0].environmental,
          "emotional": mySubmission[0].emotional,
          "social": mySubmission[0].social,
          "spiritual": mySubmission[0].spiritual
        }


        updateChart("");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataAndSetState();
  }, []);


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
            // data.physical,
            // data.intellectual,
            // data.occupational,
            // data.financial,
            // data.environmental,
            // data.emotional,
            // data.social,
            // data.spiritual,
            12, 5, 7, 14, 8, 18, 2, 19
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
            // data[1].physicalScore,
            // data[1].intellectualScore,
            // data[1].occupationalScore,
            // data[1].financialScore,
            // data[1].environmentalScore,
            // data[1].emotionalScore,
            // data[1].socialScore,
            // data[1].spiritualScore,
            13, 2, 3, 17, 11, 12, 8, 22,
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

    <div className="grid grid-cols-2 p-10">
      <div className="col pr-20 pl-16">
        <p className="text-zinc-900 text-xl font-medium font-sans pb-4">
          Congratulations on taking the first step towards creating balance in
          your life.
        </p>
        <div className="grid grid-cols-3 pl-5 py-4">
          <div className="col">
            <div className="bg-amber-200 w-11/12 p-2 text-center rounded-xl mb-5">
              Physical Score {physicalScore}
            </div>

            <div className="bg-orange-300 w-11/12 p-2 text-center rounded-xl mb-5">
              Intellectual Score: {intellectualScore}
            </div>
            <div className="bg-blue-300 w-11/12 p-2 text-center rounded-xl mb-5">
              Occupational Score: {occupationalScore}
            </div>
            <div className="bg-teal-100 w-11/12 p-2 text-center rounded-xl mb-5">
              Financial Score: {financialScore}
            </div>
          </div>

          <div className="col">
            <div className="bg-lime-200 w-11/12 p-2 text-center rounded-xl mb-5">
              Environmental Score: {environmentalScore}
            </div>
            <div className="bg-pink-300 w-11/12 p-2 text-center rounded-xl mb-5">
              Emotional Score: {emotionalScore}
            </div>
            <div className="bg-sky-200 w-11/12 p-2 text-center rounded-xl mb-5">
              Social Score: {socialScore}
            </div>
            <div className="bg-orange-200 w-11/12 p-2 text-center rounded-xl mb-5">
              Spiritual Score: {spiritualScore}
            </div>
          </div>
          <div className="col"></div>
        </div>

        <p className="pb-8 text-zinc-800">
          Now that you have taken the wellness assessment, Lets device an action
          plan to improve the main areas you want to work on to enhance your
          wellness and achieve a state of balance and contentment to unlock the
          potential to thrive for best.
        </p>
        <h4 className="pb-8 text-xl text-zinc-900 ">
          Results Analysis for each component
        </h4>
        <div className="rounded-lg bg-blue-50 p-6 mb-8">
          <p className="font-semibold pb-5">Scores of 15 - 20</p>
          <p className="pb-4">
            Excellent! You are already taking positive steps in the considered
            dimension of wellness. You're thriving to achieve the best and
            probably are motivating those around you. However, remember you
            always can improve and also, you may want to check for low scores on
            specific items to see if there are focus areas you can particularly
            improve. Wellness is all about balance, so check other areas where
            more focus is required.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 mb-8">
          <p className="font-semibold pb-5">Scores of 10 - 15</p>
          <p className="pb-4">
            Steps that you have taken seems to be in the right direction and
            commendable. You can aim for improvement. Focus on individual items
            to see different actions you can device based on the identified
            strengths. A small change in behavior can help you achieve better
            wellness scores.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 mb-8">
          <p className="font-semibold pb-5">Scores of 05 - 10</p>
          <p className="pb-4">
            Even though you seems to have taken steps considering your wellness,
            they seems to have a lot of room for improvement. Focus on
            individual items to see different actions you can device based on
            the identified strengths. You might need some notable changes in
            behavior can help you achieve better wellness scores.
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-6 mb-8">
          <p className="font-semibold pb-5">Scores of 05 and below</p>
          <p className="pb-4">
            Some potential health and wellness risks are indicated in taking the
            survey. Review each of those areas where you scored are extremely
            lower and review resources to help you develop and set achievable
            goals. If you want help deciding to make a change, contact us at
            xxxxxx
          </p>
        </div>

        <Link href="/actionplan"> <button className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600 mr-10">
          Action Plan
        </button></Link>
        <button className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600">
          Send an Email
        </button>
      </div>
      <div className="col">
        <canvas id="radarChart"></canvas>
      </div>
    </div>
  );
};

export default RadarChart;


// const fetchData = async (myUser: any) => {
//   try {
//     const physicalScore = myUser.user.physical;
//     const intellectualScore = myUser.user.intellectual;
//     const occupationalScore = myUser.user.occupational;
//     const financialScore = myUser.user.financial;
//     const environmentalScore = myUser.user.environmental;
//     const emotionalScore = myUser.user.emotional;
//     const socialScore = myUser.user.social;
//     const spiritualScore = myUser.user.spiritual;

//     setPhysicalScore(physicalScore);
//     setIntellectualScore(intellectualScore);
//     setOccupationalScore(occupationalScore);
//     setFinancialScore(financialScore);
//     setEnvironmentalScore(environmentalScore);
//     setEmotionalScore(emotionalScore);
//     setSocialScore(socialScore);
//     setSpiritualScore(spiritualScore);

//     return {
//       physicalScore,
//       intellectualScore,
//       occupationalScore,
//       financialScore,
//       environmentalScore,
//       emotionalScore,
//       socialScore,
//       spiritualScore,
//     };
//   } catch (e) {
//     console.error("Error fetching data: ", e);
//     throw e;
//   }
// };

// console.log("data", userData);


