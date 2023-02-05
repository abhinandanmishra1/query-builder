import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
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
