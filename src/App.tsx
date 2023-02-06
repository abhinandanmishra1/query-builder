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
			<div className={`h-screen bg-black p-4 ${toggle && 'opacity-90'}`}>
				<div className={`text-white border border-[#404348] w-11/12 m-auto p-4 rounded shadow shadow-lg ${toggle && 'opacity-90'}`}>
					<h3 className="text-lg m-1">Build your query</h3>
					<p className="text-[#404348] text-sm m-1">It is a platform to provide easiness for building queries.</p>
					<button
						onClick={() => setToggle(true)}
						disabled={toggle}
						className={`bg-[#5C61F0] hover:bg-[#5C61F099] text-white font-bold py-2 px-4 rounded ${
							toggle && "opacity-70"
						}`}
					>
						Build Query
					</button>
				</div>
			</div>
		</>
	);
};

export default RuleGroups;
