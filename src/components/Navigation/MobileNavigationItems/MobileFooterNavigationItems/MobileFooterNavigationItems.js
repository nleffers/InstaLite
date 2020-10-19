import React from 'react';

import MobileFooterNavigationItem from './MobileFooterNavigationItem/MobileFooterNavigationItem';
import classes from './MobileFooterNavigationItems.module.css';

const mobileNavigationItems = (props) => (
  <ul className={classes.MobileFooterNavigationItems}>
    <MobileFooterNavigationItem link="/" exact>Home</MobileFooterNavigationItem>
    <MobileFooterNavigationItem link="/explore">Explore</MobileFooterNavigationItem>
    <MobileFooterNavigationItem link="/" exact>Take Picture</MobileFooterNavigationItem>
    <MobileFooterNavigationItem link="/likes">Likes</MobileFooterNavigationItem>
    {props.isAuthenticated ? <MobileFooterNavigationItem link="/profile">Profile</MobileFooterNavigationItem> : null}
  </ul>
);

export default mobileNavigationItems;
