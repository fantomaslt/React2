import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETHC_ORDERS_SUCCESS,
  FETHC_ORDERS_START,
  FETHC_ORDERS_FAIL,
} from '../actions/actionTypes';
import axios from '../../axios-orders';
import { Dispatch } from 'redux';
import { ingredientsCostTypes } from '../../containers/BurgerBuilder/BurgerBuilder';

export const purchaseBurgerSuccess = (id: string, orderData: string) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error: boolean) => {
  return {
    type: PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START,
  };
};

// asycn When click on Button
export const purchaseBurger = (orderData: string) => {
  return (dispatch: Dispatch) => {
    dispatch(purchaseBurgerStart());
    axios

      // pasitikrinti ar veikia pilna nuoroda !!!!

      .post('/orders.json', orderData)
      .then((response) => {
        console.log(orderData, 'Ar pareina order Data actions/order');
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: PURCHASE_INIT,
  };
};

// action creators ///////////////////////

interface OrersPropsActions {
  price: number;
  ingredients: ingredientsCostTypes;
  id: number;
}

export const fetchOrdersSuccess = (orders: OrersPropsActions[]) => {
  return {
    type: FETHC_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error: string) => {
  return {
    type: FETHC_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrderStart = () => {
  return {
    type: FETHC_ORDERS_START,
  };
};

// async code ///////////////

export const fetchOrders = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchOrderStart());
    axios
      .get('/orders.json')
      .then((res) => {

        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
        // this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
