import React from 'react'

import EditProfilePage from './SettingsPageOptions/EditProfilePage/EditProfilePage'
import classes from './SettingsPage.module.css'

const settingsPage = props => {
  const { activePage, fullName, username, website, bio, email, phone, gender, editProfileInputChangedHandler, editProfileSubmitHandler } = props

  let component = null
  switch (activePage) {
    case 'EditProfile':
      component = (
        <EditProfilePage
          fullName={fullName}
          username={username}
          website={website}
          bio={bio}
          email={email}
          phone={phone}
          gender={gender}
          editProfileInputChangedHandler={editProfileInputChangedHandler}
          editProfileSubmitHandler={editProfileSubmitHandler}
        />
      )
      break
    default: break
  }

  return (
    <div className={classes.SettingsPage}>
      {component}
    </div>
  )
}

export default settingsPage
