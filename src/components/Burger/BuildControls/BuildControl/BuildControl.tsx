import React from 'react';
import classes from './BuildControl.module.css';

export interface PropsBuld {
  //  grazina objekta
  added: (event: React.MouseEvent<HTMLButtonElement>) => {};
  removed: (event: React.MouseEvent<HTMLButtonElement>) => {};
  disabled?: boolean | number;
  purchasable?: boolean;

  key: string;
  label: string;
}

const buildControl = (props: PropsBuld) => (
  <div className={classes.BuildControl}>
    <div className={classes.label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled === true ? props.disabled : false}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
