import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button'
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      to={props.userId ? {
        pathname: props.link,
        userId: props.userId
      } : { pathname: props.link }}
      style={
        props.children && props.children.type && props.children.type.name === 'logo' ? { padding: "0" } : null
      }
    >
      <Button btnType={props.icon} />
    </NavLink>
  </li>
);

export default navigationItem;
