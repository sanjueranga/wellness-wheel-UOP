import LottieAnimation from "./components/Lottie/LottieAnimation";
import Navbar from "./components/Navbar/Navbar";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <main >
      <div className="main-bg bg-gradient-to-l from-cyan-400 to-green-200 h-full">
        <div className="w-3/5 border-r-2 rounded-t-2xl bg-white">
          <Navbar />
          <div className="flex flex-col items-center justify-center text-center py-10">
      
            <LottieAnimation />
            <h1 className="text-4xl mt-5 mb-10">
              <strong className="text-emerald-400">Wellness</strong> should be{" "}
              <br /> everyone's passion{" "}
            </h1>
            <button className="btn rounded-full bg-emerald-400 text-white hover:bg-emerald-600">
              Test your self
            </button>
          </div>
        </div>
        <div className="w-2/5 h-full"></div>
      </div>
    </main>
  );
}
