import React from "react";

const QuestionCard = (props: any) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body grid grid-cols-2">
        <p>{props.text}</p>
        <div className="flex justify-around items-center ">
          <input type="radio" name={props.id} className="radio" />
          <input type="radio" name={props.id} className="radio" />
          <input type="radio" name={props.id} className="radio" />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
