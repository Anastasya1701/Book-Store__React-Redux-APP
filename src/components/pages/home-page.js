import React from 'react'
import {BookList} from "../book-list";
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

export const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable/>
        </div>
    )
}
