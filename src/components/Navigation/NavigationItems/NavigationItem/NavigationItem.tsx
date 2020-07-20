import React, { ReactNode } from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

interface navigationItem {
  link: string;
  children: ReactNode;
  exact?: boolean;
}

const navigationItem = (props: navigationItem) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
