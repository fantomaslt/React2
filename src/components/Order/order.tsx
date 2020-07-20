import React from 'react';
import classes from './order.module.css';
import { ingredientsCostTypes } from '../../containers/BurgerBuilder/BurgerBuilder';

interface orderProps {
  ingredients: ingredientsCostTypes;
  price: number;
}
const order = (props: orderProps) => {
  // Perdaro is Objekto i array
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>EUR {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;