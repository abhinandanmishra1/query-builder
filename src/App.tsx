import React, { useState } from "react";
import Modal from "./components/Modal";

const RuleGroups: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{toggle && (
				<div className="flex items-center h-screen fixed top-1 left-0 right-0 z-50">
					<Modal setToggle={setToggle} />
				</div>
			)}
			<div className={`h-screen bg-black `}>
				<button
					onClick={() => setToggle(true)}
					disabled={toggle}
					className={`bg-[#5C61F0] hover:bg-[#645CBB] text-white font-bold py-2 px-4 rounded ${
						toggle && "opacity-70"
					}`}
				>
					Build Query
				</button>
			</div>
		</>
	);
};

export default RuleGroups;
