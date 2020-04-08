import {updateOrder} from "./function-reducers";
import {initialState} from "./index";


const updateShoppingCard = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, action.payload, 1)
        case 'DELETE_BOOK':
            return updateOrder(state, action.payload, -1)
        case 'DELETE_ALL_BOOKS':
            const item = state.shoppingCard.cardItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)

        default:
            return state.shoppingCard
    }
}

export {updateShoppingCard}
