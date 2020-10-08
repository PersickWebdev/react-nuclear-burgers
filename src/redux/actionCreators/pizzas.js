import { SET_PIZZAS } from "../actionTypes/pizzas";

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    };
};