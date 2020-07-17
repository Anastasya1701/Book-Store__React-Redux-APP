import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ShopHeader from '../shop-header';
import {CardPage, HomePage} from "../pages";

export const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader />
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact/>
                <Route
                    path='/card'
                    component={CardPage}
                />
            </Switch>
        </main>
    )
}
