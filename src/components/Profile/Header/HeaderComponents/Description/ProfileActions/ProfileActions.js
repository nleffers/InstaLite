import React from 'react'
import { NavLink } from 'react-router-dom';

import Button from '../../../../../UI/Button/Button'
import Modal from '../../../../../UI/Modal/Modal'
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
  if (props.isAuthUserPage) {

  }

  let messageButton = null
  if (props.followingUserPage) {
    messageButton = (
      <NavLink to="/inbox">
        <Button btnType="Profile">Message</Button>
      </NavLink>
    )
  }

  return (
    <div className={classes.ProfileActions}>
      {editProfileButton}
    </div>
  )
}

export default profileActions
