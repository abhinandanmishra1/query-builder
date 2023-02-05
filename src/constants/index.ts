export const defaultRule = {
  field: "",
  condition: "",
  criteria: "",
  type: "rule",
}

export const defaultGroup = {
	children: [
		{
			type: "rule_group",
			children: [
				defaultRule,
			],
			conjunction: "AND",
			not: false,
		},
	],
	conjunction: "AND",
	not: false,
	type: "rule_group",
};

export const FieldOptions = [
	'Theme',
	'Sub-theme',
	'Reason',
	'Language',
	'Source',
	'Rating',
	'Time Period',
	'Customer ID',
]

export const ConditionOptions = [
	'Equals',
	'Does not equal',
	'Like',
	'Not like',
	'Is Empty',
	'Is',
	'Is not',
]

export const CriteriaOptions = [
	'Offers',
	'Performance',
	'Platform',
	'Other',
]
