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

interface FetchOrdersFailAction extends AllRandomProps {
  type: typeof FETHC_ORDERS_FAIL;
  ingredients: ingredientsCostTypes;
}

interface FetchOrdersSuccesAction extends AllRandomProps {
  type: typeof FETHC_ORDERS_SUCCESS;
  ingredients: ingredientsCostTypes;
}

interface FetchOrdersStatrtAction extends AllRandomProps {
  type: typeof FETHC_ORDERS_START;
  ingredients: ingredientsCostTypes;
}

interface PurchaseInitAction extends AllRandomProps {
  type: typeof PURCHASE_INIT;
  purchased: boolean;
  ingredients: ingredientsCostTypes;
}

interface PurchaseBurgerStartAction extends AllRandomProps {
  type: typeof PURCHASE_BURGER_START;

  ingredients: ingredientsCostTypes;
}
interface PurchaseBurgerFailAction extends AllRandomProps {
  type: typeof PURCHASE_BURGER_FAIL;
  ingredients: ingredientsCostTypes;
}
interface PurchaseBurgerSuccessAction extends AllRandomProps {
  type: typeof PURCHASE_BURGER_SUCCESS;

  ingredients: ingredientsCostTypes;
}

interface AddIngredientAction extends AllRandomProps {
  type: typeof ADD_INGREDIENT;
  ingredients: ingredientsCostTypes;
}

interface RemoveIngredientAction extends AllRandomProps {
  type: typeof REMOVE_INGREDIENT;

  ingredients: ingredientsCostTypes;
}
interface SetIngredientsAction extends AllRandomProps {
  type: typeof SET_INGREDIENTS;
  ingredients: ingredientsCostTypes;
}

interface FetchIngredientsFailedAction extends AllRandomProps {
  type: typeof FETCH_INGREDIENTS_FAILED;
  ingredients: ingredientsCostTypes;
}

interface AllRandomProps {
  orderData: string;
  order: string;
  orderId: string;
  ingredientName: string;
  orders: [];
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
