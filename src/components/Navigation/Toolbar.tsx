import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

interface toolbarProps {
  drawerToggleClicked: () => void;
  // clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const toolbar = (props: toolbarProps) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo height="" />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
