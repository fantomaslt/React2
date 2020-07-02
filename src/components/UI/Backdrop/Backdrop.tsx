import React from 'react';
import classes from './Backdrop.module.css';

interface BackdPrps {
  clicked?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  show: boolean;
}

const backdrop = (props: BackdPrps) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
