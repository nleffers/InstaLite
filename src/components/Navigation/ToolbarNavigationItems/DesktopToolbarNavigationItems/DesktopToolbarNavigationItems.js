import React from 'react';

import DesktopToolbarNavigationItem from './DesktopToolbarNavigationItem/DesktopToolbarNavigationItem';
// import Logo from '../../../Logo/Logo'
import classes from './DesktopToolbarNavigationItems.module.css';

const desktopToolbarNavigationItems = props => (
  <ul className={classes.DesktopToolbarNavigationItems}>
    <DesktopToolbarNavigationItem
      link="/"
      exact
      icon='Home'
    />
    {/* <DesktopToolbarNavigationItem link="/inbox" icon='Envelope' /> */}
    {/* <DesktopToolbarNavigationItem link="/explore" icon='Search' /> */}
    {/* <DesktopToolbarNavigationItem link="/activity" icon='Heart' /> */}
    <DesktopToolbarNavigationItem
      link="/profile"
      icon='User'
      state={{ userId: props.userId }}
    />
    <DesktopToolbarNavigationItem link="/settings" icon='Cog' state={{ activePage: 'Edit Profile' }}/>
    {props.isAuthenticated ? <DesktopToolbarNavigationItem link="/logout" icon="SignOut" /> : <DesktopToolbarNavigationItem link="/auth" icon="SignIn" />}
  </ul>
);

export default desktopToolbarNavigationItems;
