import React from 'react'

import EditProfilePage from './SettingsPageOptions/EditProfilePage/EditProfilePage'
import Spinner from '../../UI/Spinner/Spinner'
import classes from './SettingsPage.module.css'

const settingsPage = props => {
  const { activePage, fullName, username, website, bio, email, phone, gender, editProfileInputChangedHandler, editProfileSubmitHandler, loading } = props

  let component = null
  switch (activePage) {
    case 'Edit Profile':
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

  if (loading) {
    component = <Spinner />
  }

  return (
    <div className={classes.SettingsPage}>
      {component}
    </div>
  )
}

export default settingsPage
