import {ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, SET_TOTAL_COUNT, SET_TOTAL_PRICE} from "../actionTypes/cart";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (array) => array.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART : {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            };

            const items = Object.values(newItems).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
            ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }
        case CLEAR_CART : {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case REMOVE_CART_ITEM : {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }

        default:
            return state;
    }
};

export default cartReducer;