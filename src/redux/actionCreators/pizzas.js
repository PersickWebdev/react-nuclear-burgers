import {SET_LOADED, SET_PIZZAS} from "../actionTypes/pizzas";
import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((response) => {
        dispatch(setPizzas(response.data));
    });
};

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
};

export const setLoaded = (value) => {
    return {
        type: SET_LOADED,
        payload: value
    }
};