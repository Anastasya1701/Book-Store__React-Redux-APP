

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_LOADED',
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const onDelete = id => {
    return {
        type: 'DELETE_ALL_BOOKS',
        payload: id
    }

}

const onDecrease = id => {
    return {
        type: 'DELETE_BOOK',
        payload: id
    }
}

const fetchBooks = (bookstoreService) => dispatch => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

const bookAddedToCard = (bookId) => dispatch => {
    dispatch({
        type: 'BOOK_ADDED_TO_CARD',
        payload: bookId
    })
}

export {
    fetchBooks,
    bookAddedToCard,
    onDelete,
    onDecrease,
}
