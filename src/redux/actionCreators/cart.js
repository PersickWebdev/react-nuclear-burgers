import {ADD_PIZZA_TO_CART, CLEAR_CART} from "../actionTypes/cart";

export const addPizzaToCart = (pizzaObject) => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObject
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};