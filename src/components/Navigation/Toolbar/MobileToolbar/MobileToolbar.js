import React from 'react'

import MobileNavigationItems from '../../ToolbarNavigationItems/MobileNavigationItems/MobileToolbarNavigationItems/MobileToolbarNavigationItems'
// import Search from '../Search/Search'
import classes from './MobileToolbar.module.css'

const mobileToolbar = (props) => (
  <header className={classes.MobileToolbar}>
    <nav className={classes.MobileOnly}>
      <MobileNavigationItems
        isAuthenticated={props.isAuthenticated}
        userId={props.userId}
      />
    </nav>
  </header>
)

export default mobileToolbar
