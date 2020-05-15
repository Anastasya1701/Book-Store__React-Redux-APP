import {updateBookList} from "./book-list-reducers";
import {updateShoppingCard} from "./shopping-card-reducer";


const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shoppingCard: {
        cardItems: [],
        orderTotal: 0
    }
}

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCard: updateShoppingCard(state, action)
    }
}


export {reducer, initialState}
