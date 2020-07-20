// import * as actionTypes from './actionTypes';
import {
  ActionTypesS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from '../actions/actionTypes';
//  ACTIONS CREATOR

import axios from '../../axios-orders';
import { Dispatch } from 'redux';

export const addIngredient = (name: string) => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name: string) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients: ActionTypesS) => {
  return {
    type: SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const FetchIngredientsFailed = () => {
  return { type: FETCH_INGREDIENTS_FAILED };
};

// Fetching Loading Data/Ingredients
export const initIngredients = () => {
  return (dispach: Dispatch) => {
    axios
      .get('https://react-my-burger-aabb3.firebaseio.com/ingredients.json')
      .then((response) => {
        dispach(setIngredients(response.data));
      })
      .catch(() => {
        dispach(FetchIngredientsFailed());
      });
  };
};
