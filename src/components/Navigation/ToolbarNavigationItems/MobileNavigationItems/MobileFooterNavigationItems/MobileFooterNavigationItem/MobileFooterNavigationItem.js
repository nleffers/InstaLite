import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../../UI/Button/Button';
import classes from './MobileFooterNavigationItem.module.css';

const mobileFooterNavigationItem = (props) => (
  <li className={classes.MobileFooterNavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      to={{
        pathname: props.link,
        userId: props.userId
      }}
      style={
        props.children && props.children.type && props.children.type.name === 'logo' ? { padding: "0" } : null
      }
    >
      <Button btnType={props.icon} />
    </NavLink>
  </li>
)

export default mobileFooterNavigationItem;
