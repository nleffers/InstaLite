import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MobileFooterNavigationItem.module.css';

const mobileNavigationItem = (props) => (
  <li className={classes.MobileFooterNavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      to={props.link}
      style={
        props.children && props.children.type && props.children.type.name === 'logo' ? { padding: "0" } : null
      }
    >
      {props.children}
    </NavLink>
  </li>
);

export default mobileNavigationItem;
