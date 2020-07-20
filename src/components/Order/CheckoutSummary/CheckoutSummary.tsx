import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
import { IngredientBurgerBuilder } from '../../../containers/BurgerBuilder/BurgerBuilder';

interface checkoutSummaryIngredProps {
  salad: number;
  meat: number;
  bacon: number;
  cheese: number;
  ingredients: IngredientBurgerBuilder;
}

export interface CheckoutSummaryPros {
  checkoutContinued: () => void;
  checkoutCancelled: () => void;
  ingredients: IngredientBurgerBuilder;
}

const chekoutSummary = (props: CheckoutSummaryPros) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default chekoutSummary;
