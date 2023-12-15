"use client";
import LottieAnimation from "../../components/Lottie/LottieAnimation";
import Navbar from "../../components/Navbar/Navbar";
import Lottie from "lottie-react";
import "@/styles/globals.css";
import { getUser } from "@/config/api";
import { useEffect, useState } from "react";
import { Island_Moments } from "next/font/google";

export const server = process.env.SERVER ?? "http://localhost:3333/api";

const profileImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2mHjhf_0E2RUH8SXrVaw-FPJ6whDt7awjQ&usqp=CAU";

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
            //cookieset
            console.log(receivedData.picture);
            setUserPicture(receivedData.picture);
            newWindow.close();
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
