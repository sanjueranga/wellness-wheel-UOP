"use client";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import Navbar from "../../components/Navbar/Navbar";
import "@/styles/globals.css";
import { getUser, saveUser } from "@/config/api";
import { useEffect, useState } from "react";
import { Island_Moments } from "next/font/google";
export const server = process.env.SERVER ?? "http://localhost:3333/api";

const profileImg =
  "https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg";

export default function Home() {
  const [userPicture, setUserPicture] = useState(null);

  const openUserInfoWindow = () => {
    const newWindow = window.open(
      "http://localhost:3333/api/auth/google/login",
      "UserInfoWindow",
      "width=600,height=400"
    );

    if (newWindow) {
      newWindow.focus();

      window.addEventListener("message", (event) => {
        if (event.origin === "http://localhost:3333") {
          if (event.data) {
            const receivedData = JSON.parse(event.data);
            saveUser(receivedData);
            setUserPicture(receivedData.picture);
            newWindow.close();

            window.location.href = '/physical'; 
    
          }
        }
      });
    }
  };
  return (
    <main>
      <div className="">
        <div className="mx-5">
          {userPicture ? (
            <Navbar userPic={userPicture} />
          ) : (
            <Navbar userPic={profileImg} />
          )}
        </div>
        <div className="flex flex-col items-center justify-center text-center py-10">
          <LottieAnimation />
          <h1 className="text-4xl mt-5 mb-10">
            <strong className="text-emerald-400">Wellness</strong> should be{" "}
            <br /> everyone's passion{" "}
          </h1>
          <button
            className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600"
            onClick={openUserInfoWindow}
          >
            Test your self
          </button>
        </div>
        <div className="w-2/5 h-full"></div>
      </div>
    </main>
  );
}
