import React from 'react';
import classes from './Button.module.css';

interface buttonPorps {
  btnType: string;
  clicked:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  children: React.ReactNode;
}

const button = (props: buttonPorps) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
