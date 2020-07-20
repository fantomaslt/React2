import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import { IngredientBurgerBuilder } from '../../containers/BurgerBuilder/BurgerBuilder';

// import { string } from 'prop-types';

export interface TypeProps {
  ingredients: IngredientBurgerBuilder;
}

const burger = (props: TypeProps) => {
  // is objekto perdaro i array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = [
      // kadangi array uzdedam lauztinius ir priskiriam key unikalu
      <p key={'1'}>Please start adding ingredients!</p>,
    ];
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
