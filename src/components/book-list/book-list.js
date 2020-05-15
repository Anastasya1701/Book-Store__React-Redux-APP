import React, {Component} from 'react'
import {BookListItem} from "../book-list-item";
import {connect} from 'react-redux'

import {WithBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCard} from "../../actions/booksLoaded";
import compose from "../../utils/compose";

import './book-list.css'
import {Spinner} from "../spiner";
import {ErrorIndicator} from "../error-Indicator";

const BookList = ({books, bookAddedToCard }) => {

    return (
        <ul>
            {
                books.map(book => {
                    return <li>
                        <BookListItem
                            book={book}
                            bookAddedToCard={() => bookAddedToCard(book.id)}/>
                    </li>
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks(this.props.bookstoreService)
    }

    render() {
        const {books, loading, error, bookAddedToCard} = this.props

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList
            books={books}
            bookAddedToCard={bookAddedToCard}
        />
    }
}


const mapStateToProps = ({bookList: {books, loading, error}}) => {

     return {books, loading, error}
}

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, {fetchBooks, bookAddedToCard})
)(BookListContainer)


