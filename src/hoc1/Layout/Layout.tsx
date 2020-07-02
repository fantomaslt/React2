import React, { Component } from 'react';
import Aux, { Props } from '../AuxA/AuxA';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface layoutProps {
  children: React.ReactNode;
}
interface LayoutState {
  showSideDrawer: boolean;
}
class Layout extends React.Component<layoutProps, LayoutState> {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
