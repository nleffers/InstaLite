import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';
// import Search from '../Search/Search';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact><Logo /></NavigationItem>
    {/* <Search /> */}
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/inbox">Inbox</NavigationItem>
    <NavigationItem link="/explore">Explore</NavigationItem>
    <NavigationItem link="/likes">Likes</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
  </ul>
);

export default navigationItems;
