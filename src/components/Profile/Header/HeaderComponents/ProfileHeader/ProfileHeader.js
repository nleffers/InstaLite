import React from 'react'

import ProfileActions from '../ProfileActions/ProfileActions'
import classes from './ProfileHeader.module.css'

const profileHeader = props => {
  return (
    <div className={classes.ProfileHeader}>
      <span className={classes.ProfileHeaderUsername}>{props.username}</span>
      <ProfileActions
        authUserId={props.authUserId}
        isAuthUserPage={props.isAuthUserPage}
        followers={props.followers}
        followClickHandler={props.followClickHandler}
        unfollowClickHandler={props.unfollowClickHandler}
        openAuthUserModalHandler={props.openAuthUserModalHandler}
      />
    </div>
  )
}

export default profileHeader
