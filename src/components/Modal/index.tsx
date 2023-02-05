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
		<div className="border text-white w-3/4 m-auto fixed top-1 left-0 right-0 z-50 h-5/6 overflow-y-scroll bg-[#1D2025]">
			<div className="w-full bg-[#5C61F0] p-2">
				<div className="flex justify-between">
					<h3>Build Your Query</h3>
					<button onClick={() => setToggle(false)}>X</button>
				</div>
				<div>
          Query : <span className="text-[#5C61F0]">{state.query}</span>
        </div>
			</div>
			<div>
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
							}}
						/>
					);
				})}
			</div>
			<button
				className="bg-[#5C61F0] hover:bg-[#645CBB] text-white font-bold py-2 px-4 rounded mt-1"
				onClick={addGroup}
			>
				Add new group filter
			</button>
		</div>
	);
};

export default Modal;
