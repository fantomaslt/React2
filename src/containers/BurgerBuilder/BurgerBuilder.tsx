import React, { Component } from 'react';
import Aux from '../../hoc1/AuxA/AuxA';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc1/withErrorHandler/withErrorHandler';
import { RouteComponentProps } from 'react-router-dom';

import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';
import { burgerBuilderReducerProps } from '../../store/reducers/burgerBuilder';
export interface IngredPropsBurgerBuilder extends RouteComponentProps {
  ings: IngredientBurgerBuilder;
  label?: string;
  type?: string;
  purchasing: boolean;
  loading: boolean;
  error: boolean;
  onIngredientAdded: Function;
  onIngredientRemoved: Function;
  onInitIngredients: () => void;
  onInitPurchase: () => void;
  price: number;
}

export interface ingredientsCostTypes {
  salad: number;
  cheese: number;
  meat: number;
  bacon: number;
  [key: string]: number;
}

export interface IngredientBurgerBuilder {
  [key: string]: number;
}

class BurgerBuilder extends Component<IngredPropsBurgerBuilder> {
  state = {
    purchasing: false,
  };
  componentDidMount() {
    this.props.onInitIngredients();
    console.log(this.componentDidMount, ' aa suveike ?');
  }
  updatePurchaseState = (ings: { [x: string]: number }) => {
    const sum = Object.keys(ings)
      .map((igKey) => {
        return ings[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You Continue!');
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo: { [key: string]: number | boolean } = {
      ...this.props.ings,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            // purchasable={this.state.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.props.price}
          purchaseContinue={this.purchaseContinueHandler}
          ingredients={this.props.ings}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state: burgerBuilderReducerProps) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onIngredientAdded: (ingName: string) =>
      dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName: string) =>
      dispatch(actions.removeIngredient(ingName)),
    // initIngredients pareina is actions/index failo
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
