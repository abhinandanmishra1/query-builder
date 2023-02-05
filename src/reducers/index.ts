import { Rule, RuleGroup } from "../models";

export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "ADD_RULE":
			return {
				...state,
				children: [...state.children].map((group: RuleGroup, index: number) => {
					if (index === action.payload.index) {
						return {
							...group,
							children: [...group.children, action.payload.rule],
						};
					}
					return group;
				}),
			};
		case "ADD_GROUP":
			return {
				...state,
				children: [...state.children, action.payload],
			};
		case "REMOVE_RULE": {
			const { groupIndex, ruleIndex } = action.payload;
			return {
				...state,
				children: state.children.map((child: RuleGroup, index: number) => {
					if (index === groupIndex) {
						return {
							...child,
							children: child.children.filter(
								(rule: any, index: number) => index !== ruleIndex
							),
						};
					}
					return child;
				}),
			};
		}
		case "REMOVE_GROUP":
			return {
				...state,
				children: state.children.filter(
					(child: RuleGroup, index: number) => index !== action.payload
				),
			};
		case "UPDATE_RULE":
			{
				const { groupIndex, ruleIndex, updatedRule } = action.payload;

				const updatedState = {
					...state,
					children: state.children.map((child: RuleGroup, index: number) => {
						if (index === groupIndex) {
							return {
								...child,
								children: child.children.map((rule: any, index: number) => {
									if (index === ruleIndex) {
										return updatedRule;
									}
									return rule;
								}),
							};
						}
						return child;
					}),
				};

			return updatedState;
			}
		case "UPDATE_GROUP":
			return {
				...state,
				children: state.children.map((child: RuleGroup, index: number) => {
					if (index === action.payload.index) {
						return {
							...child,
							...action.payload.group,
						};
					}
					return child;
				}),
			};
		case "SET_THEME": {
			const { groupIndex, ruleIndex, theme } = action.payload;

			const updatedState = {
				...state,
				children: state.children.map((child: RuleGroup, index: number) => {
					if (index === groupIndex) {
						return {
							...child,
							children: child.children.map((rule: any, index: number) => {
								if (index === ruleIndex) {
									return {
										...rule,
										field: theme,
									};
								}
								return rule;
							}),
						};
					}
					return child;
				}),
			};
			
			return updatedState;
		}
		default:
			return state;
	}
};
