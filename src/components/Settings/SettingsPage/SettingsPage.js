import React from 'react'

import EditProfilePage from './SettingsPageOptions/EditProfilePage/EditProfilePage'
import classes from './SettingsPage.module.css'

const settingsPage = props => {
  const { activePage, error, loading, onAuthUserUpdate } = props

  let component = null
  switch (activePage) {
    case 'EditProfile':
      component = (
        <EditProfilePage
          loading={loading}
          error={error}
          onAuthUserUpdate={onAuthUserUpdate}
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
