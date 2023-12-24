import React, { useState } from "react";

const QuestionCard = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    props.onRadioChange(props.id, selectedValue);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          {props.text}
        </h3>

        {/* <p className="mb-5">{props.text}</p> */}
        <ul className="grid w-full gap-6 md:grid-cols-5 text-center items-center">
          <li>
            <p className="text-[#88619A] ">Disagree</p>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-small"
              name={props.id}
              value="0"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex items-center justify-between w-10 h-10 text-gray-500 bg-white border-2 border-[#88619A] rounded-full cursor-pointer peer-checked:border-[#88619A] peer-checked:bg-[#88619A] hover:bg-[#88619A]"
            />
          </li>
          <li>
            <input
              type="radio"
              id="hosting-small"
              name={props.id}
              value="1"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex w-8 h-8  text-gray-500 bg-white border-2 border-[#9B9FAA] rounded-full cursor-pointer peer-checked:border-[#9B9FAA] peer-checked:bg-[#9B9FAA] hover:bg-[#9B9FAA]"
            />
          </li>
          <li>
            <input
              type="radio"
              id="hosting-small"
              name={props.id}
              value="2"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex items-center justify-between w-10 h-10 text-gray-500 bg-white border-2 border-[#33A474] rounded-full cursor-pointer peer-checked:border-[#33A474] peer-checked:bg-[#33A474] hover:bg-[#33A474]"
            />
          </li>
          <li>
            <p className="text-[#33A474]">Agree</p>
          </li>
        </ul>

        {/* <div className="flex">
          <p>Disagree</p>
          <input
            type="radio"
            name={props.id}
            className="radio accent-pink-500"
            value="2"
            required
            checked
            onChange={handleRadioChange}
          />
          <input
            type="radio"
            name={props.id}
            className="radio"
            value="1"
            required
            onChange={handleRadioChange}
          />
          <input
            type="radio"
            name={props.id}
            className="radio"
            value="0"
            required
            onChange={handleRadioChange}
          />
          <p>Agree</p>
        </div> */}
      </div>
    </div>
  );
};

export default QuestionCard;
