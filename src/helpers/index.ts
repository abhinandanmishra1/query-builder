import { Rule, RuleGroup } from "../models";

const getOperator = (operator: string) => {
  switch (operator) {
    case 'Equals':
      return '=';
    case 'Does not equal':
      return '!=';
    case 'Like':
      return 'LIKE';
    case 'Not like':
      return 'NOT LIKE';
    case 'Is Empty':
      return 'IS EMPTY';
    case 'Is':
      return 'IS';
    case 'Is not':
      return 'IS NOT';
    default:
      return '';
  }
};

const getConjunction = (conjunction: string) => {
  switch (conjunction) {
    case 'AND':
      return '&&';
    case 'OR':
      return '||';
    default:
      return '';
  }
};



export const buildQuery = (state: RuleGroup) => {
  // state.children is an array of RuleGroup 
  // RuleGroup has a property called children which is an array of Rule
  // Rule has a property called field, operator, value
  // You can use the state to build your query
  const query =  state.children.map((group: any) => {
    return group.children.map((rule: any) => {
      return `"field.${rule.field.toLowerCase()} ${getOperator(rule.condition)} ${rule.criteria}"`;
    }).join(' ' + getConjunction(group.conjunction) + ' ');
  }
  ).join(' UNION ');

  return query;
};

export const checkAllFields = (state: RuleGroup) => {
  let allFieldsFilled = true;

  state.children.forEach((group: any) => {
    group.children.forEach((rule: any) => {
      if (!rule.field || !rule.condition || !rule.criteria) {
        allFieldsFilled = false;
        return;
      }
    });

    if(!allFieldsFilled) return;
  });

  return allFieldsFilled;
}