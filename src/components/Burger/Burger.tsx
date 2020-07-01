import React from 'react';
import Aux, { Props } from '../../hoc1/AuxA';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import { array, number } from 'prop-types';

// import { string } from 'prop-types';

interface TypeProps {
  // type?: string;
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;

  [index: string]: number;
}

interface aaa {
  ingredients: TypeProps;
}

const burger = (props: aaa) => {
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