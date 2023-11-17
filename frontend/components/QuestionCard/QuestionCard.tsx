import React from "react";

const QuestionCard = (props: any) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    props.onRadioChange(props.id, selectedValue);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body grid grid-cols-2">
        <p>{props.text}</p>
        <div className="flex justify-around items-center ">
          <input
            type="radio"
            name={props.id}
            className="radio"
            value="2"
            required
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
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
