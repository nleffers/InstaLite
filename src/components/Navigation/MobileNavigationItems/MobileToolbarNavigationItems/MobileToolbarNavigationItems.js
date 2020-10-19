import React from 'react';

import MobileToolbarNavigationItem from './MobileToolbarNavigationItem/MobileToolbarNavigationItem'
// import Logo from '../../../Logo/Logo';
import classes from './MobileToolbarNavigationItems.module.css';

const mobileToolbarNavigationItems = () => (
  <ul className={classes.MobileToolbarNavigationItems}>
    <MobileToolbarNavigationItem link="/" exact>Take Picture</MobileToolbarNavigationItem>
    <MobileToolbarNavigationItem link="/" exact>{/* <Logo /> */}Home</MobileToolbarNavigationItem>
    <MobileToolbarNavigationItem link="/inbox">Inbox</MobileToolbarNavigationItem>
  </ul>
);

export default mobileToolbarNavigationItems;
