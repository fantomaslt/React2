import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc1/AuxA/AuxA';

interface sideDrawerProps {
  open: boolean;
  closed: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const sideDrawer = (props: sideDrawerProps) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Closed];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo height="" />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
