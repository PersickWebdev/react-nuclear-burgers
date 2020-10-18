import {ADD_PIZZA_TO_CART} from "../actionTypes/cart";

export const addPizzaToCart = (pizzaObject) => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObject
    }
};