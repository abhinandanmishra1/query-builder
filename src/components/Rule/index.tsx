import React, { useState } from "react";
import {
	ConditionOptions,
	CriteriaOptions,
	FieldOptions,
} from "../../constants";
import SelectComponent from "../Select";

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
		<div className="flex w-full">
			<div className="w-11/12 flex border">
				<div className="w-full">
					<label
						htmlFor="criteria"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Criteria
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
						htmlFor="criteria"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Criteria
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
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
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
					className="w-32"
					onClick={() => removeRule(groupIndex, ruleIndex)}
				>
					x
				</button>
			)}
		</div>
	);
};

export default RuleComponent;
