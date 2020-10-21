import React from 'react'

import Aux from '../../../hoc/Aux'
import DesktopToolbar from './DesktopToolbar/DesktopToolbar'
import MobileToolbar from './MobileToolbar/MobileToolbar'
import MobileFooter from './MobileFooter/MobileFooter'
import classes from './Toolbar.module.css'

const toolbar = props => (
  <div className={classes.Toolbar}>
    <DesktopToolbar isAuthenticated={props.isAuthenticated} classes={classes.DesktopToolbar} />
    <MobileToolbar classes={classes.MobileToolbar} />
    <MobileFooter isAuthenticated={props.isAuthenticated} classes={classes.MobileFooter} />
  </div>
)

export default toolbar
