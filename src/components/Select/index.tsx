import React, { useState } from "react";
import downArrow from "../../assets/downArrow.svg";

const SelectComponent: React.FC<any> = ({ fieldName, options, value, onChange }) => {
	const [toggleSelect, setToggleSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

	const toggleSelectOptions = () => {
		setToggleSelect(!toggleSelect);
	};

	return (
		<div className="m-2 relative">
			<div onClick={toggleSelectOptions} className={`flex justify-between p-2 w-full cursor-pointer border border-[#404348] bg-[#404348] text-xs rounded ${value ? 'text-white' : 'text-[#ffffff52]'}`}>
				{
          value ? (
            <>
              {value} <img className="ml-1" src={downArrow} alt="Downarrow" />
            </>
          ) : (
            <>
            Select {fieldName} <img className="ml-1" src={downArrow} alt="Downarrow" />
            </>
          )
        }
			</div>
			{toggleSelect && (
				<div className="absolute bg-[#282B30] p-2 w-full border border-[#404348] mt-1 z-40">
					{options.map((option: any) => {
						return <div key={option} onClick={() => onChange(fieldName, option)} className={`hover:bg-[#404348] p-1.5 m-1 text-xs rounded cursor-pointer ${option === value && 'bg-[#404348]'}`}>{option}</div>;
					})}
				</div>
			)}
		</div>
	);
};

export default SelectComponent;
