import {SET_CATEGORY, SET_SORT_BY} from "../actionTypes/filters";

export const setCategory = (categoryIndex) => {
    return {
        type: SET_CATEGORY,
        payload: categoryIndex
    }
};

export const setSortBy = (name) => {
    return {
        type: SET_SORT_BY,
        payload: name
    }
}