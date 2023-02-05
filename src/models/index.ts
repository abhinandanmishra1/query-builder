
// create a datatype for the field type
export type FieldType = 'Theme' | 'Sub-theme' | 'Reason' | 'Language' | 'Source' | 'Rating' | 'Time Period' | 'Customer ID';
export type ConditionType = 'Equals' | 'Does not equal' | 'Like' | 'Not like' | 'Is Empty' | 'Is' | 'Is not';
export type CriteriaType = 'Offers' | 'Performance' | 'Platform' | 'Other';

export interface Rule {
  field?: FieldType,
  condition?: ConditionType,
  criteria?: CriteriaType,
  type: 'rule'
}

export interface RuleGroup {
  children: (RuleGroup | Rule)[],
  conjunction: 'AND' | 'OR',
  not: boolean,
  type: 'rule_group'
}
