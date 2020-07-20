import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { IngredientBurgerBuilder } from '../BurgerBuilder/BurgerBuilder';
import withErrorHandler from '../../hoc1/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import { burgerBuilderReducerProps } from '../../store/reducers/burgerBuilder';

interface IngredPropsCheckout extends RouteComponentProps {
  ingredients: IngredientBurgerBuilder;
}

interface zzIngredsChekout extends RouteComponentProps {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  ings: IngredientBurgerBuilder;
  onInitPurchase: () => void;
  purchased: boolean;
}
class Checkout extends Component<zzIngredsChekout> {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  chechoutContinuedHandler = () => {
    this.props.history.replace('/Checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.chechoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state: burgerBuilderReducerProps) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps)(withErrorHandler(Checkout, axios));
