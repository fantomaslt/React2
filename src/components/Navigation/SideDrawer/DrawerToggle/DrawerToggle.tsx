import React from 'react';
import classes from './DraweToggle.module.css';
interface drawerTogProps {
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const drawerToggle = (props: drawerTogProps) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
