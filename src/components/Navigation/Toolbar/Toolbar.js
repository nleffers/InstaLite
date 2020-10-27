import React from 'react'

import DesktopToolbar from './DesktopToolbar/DesktopToolbar'
import MobileToolbar from './MobileToolbar/MobileToolbar'
import MobileFooter from './MobileFooter/MobileFooter'
import classes from './Toolbar.module.css'

const toolbar = props => (
  <div className={classes.Toolbar}>
    <DesktopToolbar
      classes={classes.DesktopToolbar}
      isAuthenticated={props.isAuthenticated}
      userId={props.userId}
    />
    <MobileToolbar
      classes={classes.MobileToolbar}
    />
    <MobileFooter
      classes={classes.MobileFooter}
      isAuthenticated={props.isAuthenticated}
      userId={props.userId}
    />
  </div>
)

export default toolbar
