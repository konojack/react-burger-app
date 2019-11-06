import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { connect } from "react-redux";

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    component={ContactData} />
            </div>
        )
    }
}

const mapStateToPros = state => {
    return {
        ingredients: state.burgerBuilderReducer.ingredients,
        price: state.burgerBuilderReducer.totalPrice
    }
}

export default connect(mapStateToPros)(Checkout)
