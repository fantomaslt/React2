import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

interface IngredProps {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  //   [key]: number;
}
interface IngredType extends IngredProps {
  ingredients: IngredProps;
}

class BurgerBuilder extends Component<IngredProps> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Biuld Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
