import React from 'react';

import DesktopToolbarNavigationItem from './DesktopToolbarNavigationItem/DesktopToolbarNavigationItem';
// import Logo from '../../../Logo/Logo'
import classes from './DesktopToolbarNavigationItems.module.css';

const desktopToolbarNavigationItems = (props) => (
  <ul className={classes.DesktopToolbarNavigationItems}>
    <DesktopToolbarNavigationItem link="/" exact icon='Home' />
    <DesktopToolbarNavigationItem link="/inbox" icon="Inbox" />
    <DesktopToolbarNavigationItem link="/explore" icon='Search' />
    <DesktopToolbarNavigationItem link="/likes" icon='Heart' />
    <DesktopToolbarNavigationItem link="/profile" icon='Profile' />
    {props.isAuthenticated ? <DesktopToolbarNavigationItem link="/logout">Log Out</DesktopToolbarNavigationItem> : <DesktopToolbarNavigationItem link="/auth">Sign In</DesktopToolbarNavigationItem>}
  </ul>
);

export default desktopToolbarNavigationItems;
