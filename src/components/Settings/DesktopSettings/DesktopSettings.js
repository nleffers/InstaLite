import React from 'react'

import SettingsPage from '../SettingsPage/SettingsPage'
import SettingsTabs from '../SettingsTabs/SettingsTabs'
import classes from './DesktopSettings.module.css'

const desktopSettings = props => {
  return (
    <div className={classes.DesktopSettings}>
      <SettingsTabs
        activeTab={props.activePage}
        settingsTabs={props.settingsTabs}
        tabClickHandler={props.tabClickHandler}
      />
      <SettingsPage
        activePage={props.activePage}
        fullName={props.profileFullName}
        username={props.profileUsername}
        website={props.profileWebsite}
        bio={props.profileBio}
        email={props.profileEmail}
        phone={props.profilePhone}
        gender={props.profileGender}
        oldPassword={props.oldPassword}
        newPassword={props.newPassword}
        profilePictureUrl={props.profilePictureUrl}
        editProfileInputChangedHandler={props.editProfileInputChangedHandler}
        editProfileSubmitHandler={props.editProfileSubmitHandler}
        changePasswordSubmitHandler={props.changePasswordSubmitHandler}
        loading={props.loading}
      />
    </div>
  )
}

export default desktopSettings
