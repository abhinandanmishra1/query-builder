import React from 'react';
import RuleComponent from "../Rule";

const GroupComponent: React.FC<any> = ({
	index,
	child,
	updateRule,
	addRule,
	removeRule,
	setTheme
}) => {
	return (
		<div className='p-2 border bg-[#282B30]'>
			<div className='flex p-2'>
				<div className='mr-1'>ADD</div>
				<div>OR</div>
			</div>
			{child.children.map((rule: any, ruleIndex: number) => {
				return (
					<RuleComponent
						key={crypto.randomUUID()}
						{...{
							rule,
							updateRule,
							groupIndex: index,
							ruleIndex,
							removeRule,
							setTheme
						}}
					/>
				);
			})}

			<button className='bg-[#5C61F0] text-white py-2 px-3 rounded' onClick={(e) => addRule(index)}>Add Filter</button>
		</div>
	);
};

export default GroupComponent;
