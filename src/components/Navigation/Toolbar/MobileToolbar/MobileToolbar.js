import React from 'react'

import MobileNavigationItems from '../../ToolbarNavigationItems/MobileToolbarNavigationItems/MobileToolbarNavigationItems'
// import Search from '../Search/Search'
import classes from './MobileToolbar.module.css'

const mobileToolbar = (props) => (
  <div className={classes.MobileToolbar}>
    <nav className={classes.MobileOnly}>
      <MobileNavigationItems
        isAuthenticated={props.isAuthenticated}
        userId={props.userId}
        history={props.history}
      />
    </nav>
  </div>
)

export default mobileToolbar
