import React from 'react'
import {BookStoreServiceConsumer} from "../bookstore-service-context";


const WithBookstoreService = () => (Wrapper) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                    return <Wrapper {...props}      bookstoreService={bookstoreService}/>
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export {WithBookstoreService}
