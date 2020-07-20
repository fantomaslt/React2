import { ingredientsCostTypes } from '../../containers/BurgerBuilder/BurgerBuilder';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';

export const FETHC_ORDERS_START = 'FETHC_ORDERS_START';
export const FETHC_ORDERS_SUCCESS = 'FETHC_ORDERS_SUCCESS';
export const FETHC_ORDERS_FAIL = 'FETHC_ORDERS_FAIL';

interface FetchOrdersFailAction extends test {
  type: typeof FETHC_ORDERS_FAIL;
  orders: [];
  ingredients: ingredientsCostTypes;
}

interface FetchOrdersSuccesAction extends test {
  orders: string;
  type: typeof FETHC_ORDERS_SUCCESS;

  ingredients: ingredientsCostTypes;
}

interface FetchOrdersStatrtAction extends test {
  type: typeof FETHC_ORDERS_START;

  ingredients: ingredientsCostTypes;
  orders: [];
}

interface PurchaseInitAction extends test {
  type: typeof PURCHASE_INIT;
  purchased: boolean;
  orders: [];

  ingredients: ingredientsCostTypes;
}

interface PurchaseBurgerStartAction extends test {
  type: typeof PURCHASE_BURGER_START;
  orders: [];

  ingredients: ingredientsCostTypes;
}
interface PurchaseBurgerFailAction extends test {
  type: typeof PURCHASE_BURGER_FAIL;
  orders: [];
  ingredients: ingredientsCostTypes;
}
interface PurchaseBurgerSuccessAction extends test {
  type: typeof PURCHASE_BURGER_SUCCESS;
  orders: [];
  ingredients: ingredientsCostTypes;
}

interface AddIngredientAction extends test {
  type: typeof ADD_INGREDIENT;

  ingredients: ingredientsCostTypes;

  orders: [];
}

interface RemoveIngredientAction extends test {
  type: typeof REMOVE_INGREDIENT;
  orders: [];
  ingredients: ingredientsCostTypes;
}
interface SetIngredientsAction extends test {
  type: typeof SET_INGREDIENTS;
  ingredients: ingredientsCostTypes;
  orders: [];
}

interface FetchIngredientsFailedAction extends test {
  type: typeof FETCH_INGREDIENTS_FAILED;
  ingredients: ingredientsCostTypes;
  orders: [];
}

interface test {
  orderData: string;
  order: string;
  orderId: string;
  ingredientName: string;
}

export type ActionTypesS =
  | AddIngredientAction
  | RemoveIngredientAction
  | SetIngredientsAction
  | FetchIngredientsFailedAction
  | PurchaseBurgerFailAction
  | PurchaseBurgerSuccessAction
  | PurchaseBurgerStartAction
  | PurchaseInitAction
  | FetchOrdersStatrtAction
  | FetchOrdersSuccesAction
  | FetchOrdersFailAction;
