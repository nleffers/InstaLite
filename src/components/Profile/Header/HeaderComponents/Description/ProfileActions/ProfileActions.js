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
  if (props.isAuthUserPage) {
    authUserActionsButton = <Button
      btnType="Cog"
      clicked={props.clicked}
    ></Button>
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
    </div>
  )
}

export default profileActions
