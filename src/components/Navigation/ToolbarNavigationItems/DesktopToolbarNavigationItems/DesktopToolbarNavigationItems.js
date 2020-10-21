import React from 'react';

import DesktopToolbarNavigationItem from './DesktopToolbarNavigationItem/DesktopToolbarNavigationItem';
// import Logo from '../../../Logo/Logo'
import classes from './DesktopToolbarNavigationItems.module.css';

const desktopToolbarNavigationItems = (props) => (
  <ul className={classes.DesktopToolbarNavigationItems}>
    <DesktopToolbarNavigationItem link="/" exact icon='Home' />
    <DesktopToolbarNavigationItem link="/inbox" icon='Inbox' />
    <DesktopToolbarNavigationItem link="/explore" icon='Search' />
    <DesktopToolbarNavigationItem link="/activity" icon='Heart' />
    <DesktopToolbarNavigationItem link="/profile" icon='Profile' />
    <DesktopToolbarNavigationItem link="/settings" icon='Settings' />
    {props.isAuthenticated ? <DesktopToolbarNavigationItem link="/logout" icon="SignOut" /> : <DesktopToolbarNavigationItem link="/auth" icon="SignIn" />}
  </ul>
);

export default desktopToolbarNavigationItems;
