// import {postLogin} from "@/config/api";
// import { useEffect } from "react";

const HomePage = () => {
  

  const handleGoogleSignIn = async () => {
    try {
      // await postLogin()

    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default HomePage;
