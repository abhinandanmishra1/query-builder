import React, { useEffect, useState } from 'react';
import RuleComponent from "../Rule";

import {IoIosInformationCircle} from 'react-icons/io';

const GroupComponent: React.FC<any> = ({
	index,
	child,
	updateRule,
	updateGroup,
	addRule,
	removeRule,
	setTheme
}) => {
	const updateConjunction = (conjunction: string) => {
		updateGroup(index, { conjunction });
	};

	return (
		<div className='p-2 border border-[#404348] bg-[#282B30] w-11/12 m-auto my-2 rounded relative'>
			<div className='flex p-2 text-sm'>
				<div onClick={() => updateConjunction('AND')} className={`cursor-pointer border border-[#404348] p-1 rounded-tl rounded-bl ${child.conjunction === 'AND' && 'bg-[#5C61F0]'}`}>AND</div>
				<div onClick={() => updateConjunction('OR')} className={`cursor-pointer mr-1 border border-[#404348] p-1 rounded-tr rounded-br ${child.conjunction === 'OR' && 'bg-[#5C61F0]'}`}>OR</div>
				<div className='flex items-center'>
					<IoIosInformationCircle className='text-[#404348] text-sm fill-[#ffffff50]' />
				</div>
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

			<button className='bg-[#5C61F0] text-white py-1.5 px-3 rounded text-sm' onClick={(e) => addRule(index)}>+ Add Filter</button>
		</div>
	);
};

export default GroupComponent;
