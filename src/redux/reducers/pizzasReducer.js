import {SET_LOADED, SET_PIZZAS} from "../actionTypes/pizzas";

const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS :
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case SET_LOADED :
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
}

export default pizzasReducer;