import React from 'react'

import Logo from '../../../Logo/Logo'
import DesktopToolbarNavigationItems from '../../ToolbarNavigationItems/DesktopToolbarNavigationItems/DesktopToolbarNavigationItems'
// import Search from '../Search/Search'
import classes from './DesktopToolbar.module.css'

const desktopToolbar = (props) => (
  <header className={classes.DesktopToolbar}>
    <Logo />
    {/* <Search /> */}
    <nav className={classes.DesktopOnly}>
      <DesktopToolbarNavigationItems
        isAuthenticated={props.isAuthenticated}
        userObjectId={props.userObjectId}
      />
    </nav>
  </header>
)

export default desktopToolbar
