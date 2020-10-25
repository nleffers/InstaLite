import React from 'react'

import WallTabs from '../../UI/WallTabs/WallTabs'
import WallGrid from '../../UI/WallGrid/WallGrid'
import classes from './ProfileWall.module.css'

const profileWall = props => {
  return (
    <div className={classes.ProfileWall}>
      <WallTabs
        activeTab={props.activeTab}
        isAuthUserPage={props.isAuthUserPage}
        tabClickHandler={props.tabClickHandler}
      />
    </div>
  )
}

export default profileWall
