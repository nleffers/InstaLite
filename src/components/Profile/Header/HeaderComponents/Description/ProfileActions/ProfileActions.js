import React from 'react'
import { NavLink } from 'react-router-dom';

import Button from '../../../../../UI/Button/Button'
import classes from './ProfileActions.module.css'

const profileActions = props => {
  let editProfileButton = null
  if (props.isAuthUserPage) {
    editProfileButton = (
      <NavLink to="/settings">
        <Button btnType="Profile">Edit Profile</Button>
      </NavLink>
    )
  }

  let authUserActionsButton = null
  // if (props.isAuthUserPage) {
  //   authUserActionsButton = <Button
  //     btnType="Cog"
  //     clicked={props.clicked}
  //   ></Button>
  // }

  let followButton = null
  if (props.isAuthUserPage) {
    followButton = null
  } else if (props.followers.some(follower => follower.userId === props.authUserId)) {
    followButton = <Button btnType="Profile" clicked={props.unfollowClickHandler}>Unfollow</Button>
  } else {
    followButton = <Button btnType="Profile" clicked={props.followClickHandler}>Follow</Button>
  }

  // let messageButton = null
  // if (props.followingUserPage) {
  //   messageButton = (
  //     <NavLink to="/inbox">
  //       <Button btnType="Profile">Message</Button>
  //     </NavLink>
  //   )
  // }

  return (
    <div className={classes.ProfileActions}>
      {editProfileButton}
      {authUserActionsButton}
      {followButton}
    </div>
  )
}

export default profileActions
