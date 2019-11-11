import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { connect } from "react-redux";
import * as actions from '../../store/actions';

class Checkout extends Component {

    componentWillMount() {
        this.props.onPurchaseInit();
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if (this.props.ingredients) {
            const purchased = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchased}
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
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
