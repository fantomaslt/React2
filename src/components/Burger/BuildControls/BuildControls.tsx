import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

interface PropsBuildContrs {
  purchasable: boolean;
  ingredientAdded: (argumentasKurisAteinaIFunkcija: string) => void;
  ingredientRemoved: (argumentasKurisAteinaIFunkcija: string) => void;
  type?: string | undefined;
  disabled: { [key: string]: number | boolean };
  price: number;
  ordered: (event: React.MouseEvent) => void;
}

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
];

const buildControls = (props: PropsBuildContrs) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={async () => props.ingredientAdded(ctrl.type)}
        removed={async () => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      // disabled={props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
