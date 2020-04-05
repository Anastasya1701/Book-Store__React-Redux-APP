import React, {Component} from 'react'
import {BookListItem} from "../book-list-item";
import {connect} from 'react-redux'

import {WithBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions/booksLoaded";
import compose from "../../utils/compose";

import './book-list.css'

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props
        const data = bookstoreService.getBooks()
        this.props.booksLoaded(data)

    }

    render() {
        const {books} = this.props
        return (
            <ul>
                {
                    books.map(book => {
                        return <li><BookListItem book={book}/></li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        books: store.books,
    }
}

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, {booksLoaded})
)(BookList)


