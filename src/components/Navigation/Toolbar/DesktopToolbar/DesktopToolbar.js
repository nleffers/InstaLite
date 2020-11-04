import React from 'react'

import Logo from '../../../Logo/Logo'
import DesktopToolbarNavigationItems from '../../ToolbarNavigationItems/DesktopToolbarNavigationItems/DesktopToolbarNavigationItems'
import Search from '../../../../hoc/Search/Search'
import classes from './DesktopToolbar.module.css'

const desktopToolbar = (props) => (
  <div className={classes.DesktopToolbar}>
    <Logo />
    <Search history={props.history} />
    <nav className={classes.DesktopOnly}>
      <DesktopToolbarNavigationItems
        isAuthenticated={props.isAuthenticated}
        userId={props.userId}
        history={props.history}
      />
    </nav>
  </div>
)

export default desktopToolbar
