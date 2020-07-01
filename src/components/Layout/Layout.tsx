import React from 'react';
import Aux, { Props } from '../../hoc1/AuxA';
import classes from './Layout.module.css';

const Layout = (props: Props) => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
