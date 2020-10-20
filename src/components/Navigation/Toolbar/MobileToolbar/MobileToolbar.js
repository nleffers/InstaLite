import React from 'react'

import MobileNavigationItems from '../../ToolbarNavigationItems/MobileNavigationItems/MobileToolbarNavigationItems/MobileToolbarNavigationItems'
// import Search from '../Search/Search'
import classes from './MobileToolbar.module.css'

const desktopToolbar = (props) => (
  <header className={classes.MobileToolbar}>
    <nav className={classes.MobileOnly}>
      <MobileNavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
)

export default desktopToolbar
