import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../../UI/Button/Button';
import classes from './MobileToolbarNavigationItem.module.css';

const mobileToolbarNavigationItem = (props) => (
  <li className={classes.MobileToolbarNavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      to={props.link}
      style={
        props.children && props.children.type && props.children.type.name === 'logo' ? { padding: "0" } : null
      }
    >
      <Button btnType={props.icon} />
    </NavLink>
  </li>
);

export default mobileToolbarNavigationItem;
