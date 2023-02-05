import React from "react";
import GroupComponent from "../../components/RuleGroup";

import { useCustomReducer } from "../../reducers/useCustomReducer";

const Modal: React.FC<any> = ({ setToggle }) => {
	const {
		state,
		addRule,
		addGroup,
		removeRule,
		removeGroup,
		updateRule,
		updateGroup,
		setTheme,
	} = useCustomReducer();

	return (
		<div className="border border-[#404348] flex flex-col justify-between text-white w-3/4 m-auto h-5/6 scrollbar-thin scrollbar-thumb-[#1D2025] scrollbar-track-[#404348] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full bg-[#1D2025] rounded">
			<div className="w-full bg-[#5C61F0] p-4">
				<div className="flex justify-between mb-1">
					<h3 className="p-1">Build your query</h3>
					<button
						className="bg-[#4338CA] text-[#C7D2FE] px-1 h-5 grid place-items-center"
						onClick={() => setToggle(false)}
					>
						X
					</button>
				</div>
				<div className="bg-[#4338CA] text-sm p-2 rounded w-9/11 ">
					Query : <span className="text-[#5C61F0]">{state.query}</span>
				</div>
			</div>
			<div className="flex-col justify-end">
				<div className="pb-2">
					{state.children.map((child: any, index: number) => {
						return (
							<GroupComponent
								key={crypto.randomUUID()}
								{...{
									index,
									child,
									updateRule,
									addRule,
									setTheme,
									removeRule,
									updateGroup,
								}}
							/>
						);
					})}
				</div>
				<button
					className="bg-[#5C61F0] text-sm text-white rounded mt-1 py-1.5 px-3 m-2 before:content-[''] relative before:block before:absolute before:-top-2/3 before:z-10 before:bg-[#4F4F4F] before:w-px before:h-2/3 before:left-1/4 "
					onClick={addGroup}
				>
					+ Add new group filter
				</button>
				<div className="flex justify-between m-4">
					<button
						className="bg-[#6D7175] text-sm text-white rounded mt-1 py-1.5 px-3 m-2 "
					>
						Back
					</button>
					<button
						className="bg-[#5C61F0] text-sm text-white rounded mt-1 py-1.5 px-3 m-2 "
					>
						Finish
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
