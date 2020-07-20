import React, { Component } from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc1/withErrorHandler/withErrorHandler';
import { ingredientsCostTypes } from '../../containers/BurgerBuilder/BurgerBuilder';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { burgerBuilderReducerProps } from '../../store/reducers/burgerBuilder';
// import { ThunkDispatch } from 'redux-thunk';
// import { ActionTypesS } from '../../store/actions/actionTypes';
// import { Dispatch } from 'redux';
// import { RootState } from '../../index';

export interface OrdersStatePro {
  orders: [
    {
      price: number;
      ingredients: ingredientsCostTypes;
      id: number;
    }
  ];

  loading: boolean;
  onFetchOrders: Function;
}
class Orders extends Component<OrdersStatePro> {
  state = {};

  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let orders = [<Spinner />];
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div> {orders}</div>;
  }
}

const mapStateToProps = (state: burgerBuilderReducerProps) => {
  return { orders: state.order.orders, loading: state.order.loading };
};
// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<RootState, unknown, ActionTypesS>
// ) => {
//   return { onFetchOrders: () => dispatch(actions.fetchOrders()) };
// };

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
