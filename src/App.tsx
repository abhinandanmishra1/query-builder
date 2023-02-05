import React, { useState } from "react";
import Modal from "./components/Modal";
import GroupComponent from "./components/RuleGroup";

import { useCustomReducer } from "./reducers/useCustomReducer";

const RuleGroups: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{toggle && <Modal setToggle={setToggle} />}
			<div className={`h-screen bg-black `}>
				<button
					onClick={() => setToggle(true)}
					disabled={toggle}
					className={`bg-[#5C61F0] hover:bg-[#645CBB] text-white font-bold py-2 px-4 rounded ${toggle && "opacity-70"}`}
				>
					Build Query
				</button>
			</div>
		</>
	);
};

export default RuleGroups;
