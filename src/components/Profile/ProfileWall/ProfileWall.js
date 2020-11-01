import React from 'react'

import ProfileWallTabs from './ProfileWallTabs/ProfileWallTabs'
import ProfileWallGrid from './ProfileWallGrid/ProfileWallGrid'
import classes from './ProfileWall.module.css'

const profileWall = props => {
  let pictures = props.pictures
  if (props.activeTab === 'TAGGED') {
    pictures = props.taggedPictures
  }

  return (
    <div className={classes.ProfileWall}>
      <ProfileWallTabs
        activeTab={props.activeTab}
        isAuthUserPage={props.isAuthUserPage}
        tabClickHandler={props.tabClickHandler}
      />
      <ProfileWallGrid
        pictures={pictures}
      />
    </div>
  )
}

export default profileWall
