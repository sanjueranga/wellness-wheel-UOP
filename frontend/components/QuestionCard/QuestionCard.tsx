import React, { useState, useEffect } from "react";

const QuestionCard = (props: any) => {

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    props.onRadioChange(props.id, selectedValue);
  };


  return (
    <div className="card bg-base-100 border-2 border-transparent hover:border-[#e5d7d5] duration-300 delay-75">
      <div className="card-body ">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          {props.text}
        </h3>

        <div className="grid grid-cols-5 text-center">
          <p className="text-[#88619A] ">Disagree</p>
          <div className="justify-center flex items-center">
            <input
              type="radio"
              name={props.id}
              value="0"
              className="radio w-8 h-8 border-[#88619A] border-2 checked:bg-[#88619A]"
              onChange={handleRadioChange}
              required
            />
          </div>
          <div className="justify-center flex items-center">
            <input
              type="radio"
              name={props.id}
              value="1"
              className="radio border-[#9B9FAA] border-2 checked:bg-[#9B9FAA]"
              onChange={handleRadioChange}
              required
            />
          </div>
          <div className="justify-center flex items-center">
            <input
              type="radio"
              name={props.id}
              value="2"
              className="radio w-8 h-8 border-[#33A474] border-2 checked:bg-[#33A474]"
              onChange={handleRadioChange}
              required
            />
          </div>
          <p className="text-[#33A474]">Agree</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
