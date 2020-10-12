import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
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

export default navigationItem;
