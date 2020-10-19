import React from 'react'

import Logo from '../../../Logo/Logo'
import NavigationItems from '../../NavigationItems/NavigationItems'
// import Search from '../Search/Search'
import classes from './DesktopToolbar.module.css'

const desktopToolbar = (props) => (
  <header className={classes.DesktopToolbar}>
    <Logo />
    {/* <Search /> */}
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
)

export default desktopToolbar
