import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact><Logo /></NavigationItem>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/inbox">Inbox</NavigationItem>
    <NavigationItem link="/explore">Explore</NavigationItem>
    <NavigationItem link="/likes">Likes</NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/profile">Profile</NavigationItem> : null}
    {props.isAuthenticated ? <NavigationItem link="/logout">Log Out</NavigationItem> : <NavigationItem link="/auth">Sign In</NavigationItem>}
  </ul>
);

export default navigationItems;
