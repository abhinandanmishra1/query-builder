import React, { useState } from "react";
import {
	ConditionOptions,
	CriteriaOptions,
	FieldOptions,
} from "../../constants";
import SelectComponent from "../Select";
import {FaTrash} from 'react-icons/fa';

const RuleComponent: React.FC<any> = ({
	rule,
	updateRule,
	groupIndex,
	removeRule,
	ruleIndex,
}) => {
	const [currRule, setCurrRule] = useState(rule);

	const updateRuleOnChange = (fieldName: any, value: any) => {
		const updatedRule = { ...currRule, [fieldName]: value };
		setCurrRule(updatedRule);
		updateRule(groupIndex, ruleIndex, updatedRule);
	};

	return (
		<div className="flex w-full h-full items-center">
			<div className="w-11/12 flex my-1 items-center">
				<div className="w-full flex-col items-start">
					<label
						htmlFor="field"
						className="block ml-2 mb-2 text-xs font-medium text-white"
					>
						Field
					</label>
					<SelectComponent
						fieldName="field"
						options={FieldOptions}
						value={rule.field}
						onChange={updateRuleOnChange}
					/>
				</div>
				<div className="w-full">
					<label
						htmlFor="condition"
						className="block ml-2 mb-2 text-xs font-medium text-white"
					>
						Condition
					</label>
					<SelectComponent
						fieldName="condition"
						options={ConditionOptions}
						value={rule.condition}
						onChange={updateRuleOnChange}
					/>
				</div>
				<div className="w-full">
					<label
						htmlFor="criteria"
						className="block ml-2 mb-2 text-xs font-medium text-white"
					>
						Criteria
					</label>
					<SelectComponent
						fieldName="criteria"
						options={CriteriaOptions}
						value={rule.criteria}
						onChange={updateRuleOnChange}
					/>
				</div>
			</div>
			{ruleIndex > 0 && (
				<button
					className="w-8 bg-[#404348] px-1.5 mt-3 text-sm flex justify-center py-2"
					onClick={() => removeRule(groupIndex, ruleIndex)}
				>
					<FaTrash className="fill-[#ffffff50]" />
				</button>
			)}
		</div>
	);
};

export default RuleComponent;
