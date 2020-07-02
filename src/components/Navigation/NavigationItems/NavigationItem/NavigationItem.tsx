import React, { ReactNode } from 'react';
import classes from './NavigationItem.module.css';

interface navigationItem {
  active: any;
  link: string;
  children: ReactNode;
}

const navigationItem = (props: navigationItem) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : undefined}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
