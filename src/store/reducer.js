import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        cheese: 0,
        bacon: 0,
        meat: 0,
        salad: 0,
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1,
                },
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] -1,
                },
            };

        default:
            return state;
    }
}

export default reducer;