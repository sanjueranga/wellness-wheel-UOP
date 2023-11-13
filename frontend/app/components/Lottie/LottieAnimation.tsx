'use client';

import Lottie from 'lottie-react'
import React from 'react'
import animationData from "./Animation.json";

const LottieAnimation = () => {
  return (
    <Lottie
              animationData={animationData}
              className="flex justify-center items-center w-3/10"
              loop={true}
            />
  )
}

export default LottieAnimation