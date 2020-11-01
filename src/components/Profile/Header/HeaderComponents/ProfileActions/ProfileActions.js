import React from 'react'
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button'
// import ModalOpen from '../../../../../UI/ModalOpen/ModalOpen'
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

  let dropdownButton = null
  if (props.isAuthUserPage) {
    dropdownButton = <Button
      btnType="Cog"
      clicked={props.openAuthUserModalHandler}
    ></Button>
  // } else if (props.followers.length === 0 || !props.followers.filter(user => user.userId === props.authUserId)) {
  //   dropdownButton = <ModalOpen />
  }

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
      {followButton}
      {dropdownButton}
    </div>
  )
}

export default profileActions
