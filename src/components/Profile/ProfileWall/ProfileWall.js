import React from 'react'

import WallTabs from '../../UI/WallTabs/WallTabs'
import WallGrid from '../../UI/WallGrid/WallGrid'
import classes from './ProfileWall.module.css'

const profileWall = props => {
  let pictures = props.pictures
  if (props.activeTab === 'TAGGED') {
    pictures = props.taggedPictures
  }

  return (
    <div className={classes.ProfileWall}>
      <WallTabs
        activeTab={props.activeTab}
        isAuthUserPage={props.isAuthUserPage}
        tabClickHandler={props.tabClickHandler}
      />
      <WallGrid
        pictures={pictures}
      />
    </div>
  )
}

export default profileWall
