import {
  ActionTypesS,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETHC_ORDERS_START,
  FETHC_ORDERS_SUCCESS,
  FETHC_ORDERS_FAIL,
} from '../actions/actionTypes';

import { updatedObjetct } from '../utility';

export interface reducerStateProps {
  // kadangi array uzdedam lauztinius skliaustus

  orders: orderProps[];
  loading: boolean;
  purchased: boolean;
}

interface orderProps {}

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state: reducerStateProps, action: ActionTypesS) => {
  return updatedObjetct(state, { purchased: false });
};

const purchaseBurgerStart = (
  state: reducerStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, { loading: true });
};

const purchaseBurgerSuccess = (
  state: reducerStateProps,
  action: ActionTypesS
) => {
  const newOrder = updatedObjetct(action.orderData, { id: action.orderId });
  return updatedObjetct(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};
const purchaseBurgerFail = (state: reducerStateProps, action: ActionTypesS) => {
  return updatedObjetct(state, { loading: false });
};

const purchaseFetchOrdersFail = (
  state: reducerStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, { loading: true });
};

const purchaseFetchOrdersSuccess = (
  state: reducerStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, { orders: action.orders, loading: false });
};
const purchaseFetchOrderFail = (
  state: reducerStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, { loading: false });
};

const reducer = (
  state: reducerStateProps = initialState,
  action: ActionTypesS
) => {
  console.log(action);
  switch (action.type) {
    case PURCHASE_INIT:
      return purchaseInit(state, action);

    //   return { ...state, purchased: false };
    case PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);

    case PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case FETHC_ORDERS_START:
      return purchaseFetchOrdersFail(state, action);
    case FETHC_ORDERS_SUCCESS:
      return purchaseFetchOrdersSuccess(state, action);
    case FETHC_ORDERS_FAIL:
      return purchaseFetchOrderFail(state, action);
    default:
      return state;
  }
};

export default reducer;
