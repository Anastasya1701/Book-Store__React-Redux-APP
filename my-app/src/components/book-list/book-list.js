import React, {Component} from 'react'
import {BookListItem} from "../book-list-item";
import {connect} from 'react-redux'

import {WithBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCard} from "../../actions/booksLoaded";
import compose from "../../utils/compose";

import './book-list.css'
import {Spinner} from "../spiner";
import {ErrorIndicator} from "../error-Indicator";

const BookList = ({books, onAddedToCard }) => {
    return (
        <ul>
            {
                books.map(book => {
                    return <li>
                        <BookListItem
                            book={book}
                            onAddedToCard={() => onAddedToCard(book.id)}/>
                    </li>
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCard} = this.props

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList
            books={books}
            onAddedToCard={onAddedToCard}
        />
    }
}


const mapStateToProps = ({bookList: {books, loading, error}}) => {

     return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCard: (id) => dispatch(bookAddedToCard(id))

    }

}

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)


