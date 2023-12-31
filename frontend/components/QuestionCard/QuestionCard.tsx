import React, { useState } from "react";

const QuestionCard = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    props.onRadioChange(props.id, selectedValue);
  };

  return (
    <div className="card bg-base-100 hover:border-2 hover:border-[#e5d7d5] ">
      <div className="card-body ">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          {props.text}
        </h3>

        <div className="grid grid-cols-5 text-center">
          <p className="text-[#88619A] ">Disagree</p>
          <div className="justify-center flex items-center"><input type="radio" name="radio-4" className="radio w-8 h-8 border-[#88619A] border-2 checked:bg-[#88619A]" /></div>
          <div className="justify-center flex items-center"><input type="radio" name="radio-4" className="radio border-[#9B9FAA] border-2 checked:bg-[#9B9FAA]" /></div>
          <div className="justify-center flex items-center"><input type="radio" name="radio-4" className="radio w-8 h-8 border-[#33A474] border-2 checked:bg-[#33A474]" /></div>
          <p className="text-[#33A474]">Agree</p>
        </div>

      </div>
    </div>
  );
};

export default QuestionCard;
