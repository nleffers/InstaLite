import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button'
import classes from './DesktopToolbarNavigationItem.module.css';

const desktopToolbarNavigationItem = (props) => (
  <li className={classes.DesktopToolbarNavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      to={{
        pathname: props.link,
        userObjectId: props.userObjectId
      }}
      style={
        props.children && props.children.type && props.children.type.name === 'logo' ? { padding: "0" } : null
      }
    >
      <Button btnType={props.icon} />
    </NavLink>
  </li>
);

export default desktopToolbarNavigationItem;
