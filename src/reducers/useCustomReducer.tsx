import React, { useReducer } from "react";
import { defaultGroup, defaultRule } from "../constants";
import { reducer } from "./index";

export function useCustomReducer() {
  const [state, dispatch] = useReducer(reducer, defaultGroup);

	const addRule = (index: number) => {
		dispatch({
			type: "ADD_RULE",
			payload: {
				index,
				rule: defaultRule,
			},
		});
	};

	const addGroup = () => {
		dispatch({
			type: "ADD_GROUP",
			payload: defaultGroup,
		});
	};

	const removeRule = (groupIndex: number, ruleIndex: number) => {
		dispatch({
			type: "REMOVE_RULE",
			payload: {
				groupIndex,
				ruleIndex,
			},
		});
	};

	const removeGroup = (index: number) => {
		dispatch({
			type: "REMOVE_GROUP",
			payload: index,
		});
	};

	const updateRule = (groupIndex: number, ruleIndex:number, updatedRule: any) => {
		dispatch({
			type: "UPDATE_RULE",
			payload: {
				groupIndex,
				ruleIndex,
				updatedRule,
			},
		});
	};

	const updateGroup = (index: number, group: any) => {
		dispatch({
			type: "UPDATE_GROUP",
			payload: {
				index,
				group,
			},
		});
	};

	const setTheme = (groupIndex: number, ruleIndex: number, theme: string) => {
		dispatch({
			type: "SET_THEME",
			payload: {
				groupIndex,
				ruleIndex,
				theme,
			},
		});
	};

  return {
    state,
    addRule,
    addGroup,
    removeRule,
    removeGroup,
    updateRule,
    updateGroup,
		setTheme
  }
}
