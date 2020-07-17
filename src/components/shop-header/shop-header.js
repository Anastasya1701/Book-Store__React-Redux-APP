import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const ShopHeader = ({orderTotal = 0, cardItems = []}) => {
    return (
        <header className="shop-header row">
            <Link to='/'>
                <div className="logo text-dark" href="#">ReStore</div>
            </Link>
            <Link to='/card'>
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {cardItems.length} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({shoppingCard: { cardItems ,orderTotal}}) => {
    return {
        cardItems,
        orderTotal,
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ShopHeader);

