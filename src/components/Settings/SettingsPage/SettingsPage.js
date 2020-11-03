import React from 'react'

import SettingsPageHeader from './SettingsPageHeader/SettingsPageHeader'
import EditProfilePage from './SettingsPageOptions/EditProfilePage/EditProfilePage'
import ChangePasswordPage from './SettingsPageOptions/ChangePasswordPage/ChangePasswordPage'
import Spinner from '../../UI/Spinner/Spinner'
import classes from './SettingsPage.module.css'

const settingsPage = props => {
  let component = null
  switch (props.activePage) {
    case 'Edit Profile':
      component = <EditProfilePage
        fullName={props.fullName}
        username={props.username}
        website={props.website}
        bio={props.bio}
        email={props.email}
        phone={props.phone}
        gender={props.gender}
        editProfileInputChangedHandler={props.editProfileInputChangedHandler}
        editProfileSubmitHandler={props.editProfileSubmitHandler}
      />
      break
    case 'Change Password':
      component = <ChangePasswordPage
        username={props.username}
        oldPassword={props.oldPassword}
        newPassword={props.newPassword}
        editProfileInputChangedHandler={props.editProfileInputChangedHandler}
        changePasswordSubmitHandler={props.changePasswordSubmitHandler}
      />
      break
    default: break
  }

  if (props.loading) {
    component = <Spinner />
  }

  return (
    <div className={classes.SettingsPage}>
      <SettingsPageHeader
        activePage={props.activePage}
        profilePictureUrl={props.profilePictureUrl}
        username={props.username.value}
      />
      {component}
    </div>
  )
}

export default settingsPage
