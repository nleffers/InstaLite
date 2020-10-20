import React from 'react'

import Aux from '../../../../hoc/Aux'
import MobileNavigationItems from '../../ToolbarNavigationItems/MobileNavigationItems/MobileFooterNavigationItems/MobileFooterNavigationItems'
// import Search from '../Search/Search'
import classes from './MobileFooter.module.css'

const mobileToolbar = (props) => (
  <Aux>
    <header className={classes.MobileFooter}>
      {/* <Search /> */}
      <nav className={classes.MobileOnly}>
        <MobileNavigationItems isAuthenticated={props.isAuthenticated} />
      </nav>
    </header>
  </Aux>
)

export default mobileToolbar
