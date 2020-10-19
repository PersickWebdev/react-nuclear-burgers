import {ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM} from "../actionTypes/cart";

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

export const removeCartItem = () => {
    return {
        type: REMOVE_CART_ITEM
    }
};