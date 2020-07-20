import {
  ActionTypesS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from '../actions/actionTypes';
import {
  IngredientBurgerBuilder,
  ingredientsCostTypes,
} from '../../containers/BurgerBuilder/BurgerBuilder';
import { updatedObjetct } from '../utility';

export interface burgerBuilderReducerProps {
  burgerBuilder: {
    ingredients: IngredientBurgerBuilder;
    totalPrice: number;
    error: boolean;
  };
  order: {
    orders: [
      {
        price: number;
        ingredients: IngredientBurgerBuilder;
        id: number;
      }
    ];
    loading: boolean;
    purchased: boolean;
  };
}

interface BurgerBuilderStateProps {
  ingredients: reducerIngProps;
  totalPrice: number;
  updatePurschaseState?: null;
  error?: boolean;
  loading?: boolean;
}

interface reducerIngProps {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}

const initialState = {
  ingredients: {} as reducerIngProps,
  totalPrice: 1.11,
  updatePurschaseState: null,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
} as ingredientsCostTypes;

const addIngredient = (
  state: BurgerBuilderStateProps,
  action: ActionTypesS
) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updatedObjetct(
    state.ingredients,
    updatedIngredient
  );
  const updatedState = {
    ingredients: updatedIngredients,

    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updatedObjetct(state, updatedState);
};

const removeIngredient = (
  state: BurgerBuilderStateProps,
  action: ActionTypesS
) => {
  const updatedIngredientRemove = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngredientsRemove = updatedObjetct(
    state.ingredients,
    updatedIngredientRemove
  );
  const updatedStateRemove = {
    ingredients: updatedIngredientsRemove,

    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
  };
  return updatedObjetct(state, updatedStateRemove);
};

const setIngredients = (
  state: BurgerBuilderStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 1.55,
    error: false,
  });
};

const fetchIngredientsFailed = (
  state: BurgerBuilderStateProps,
  action: ActionTypesS
) => {
  return updatedObjetct(state, { error: true });
};
const reducer = (
  state: BurgerBuilderStateProps = initialState,
  action: ActionTypesS
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case SET_INGREDIENTS:
      return setIngredients(state, action);

    case FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
