import React from 'react'

import Aux from '../../../hoc/Aux'
import SettingsPage from '../SettingsPage/SettingsPage'
import SettingsTabs from '../SettingsTabs/SettingsTabs'
import classes from './MobileSettings.module.css'

const mobileSettings = props => {
  const { activePage, settingsTabs, resetActivePageHandler, tabClickHandler } = props

  let focusedComponent = <SettingsTabs
    activeTab={activePage}
    settingsTabs={settingsTabs}
    tabClickHandler={tabClickHandler}
  />
  if (activePage !== '') {
    focusedComponent = <Aux>
      <div
        className={classes.MobileSettingsToolbar}
        onClick={resetActivePageHandler}
      >
        Back
      </div>
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
    </Aux>
  }

  return (
    <div className={classes.MobileSettings}>
      {focusedComponent}
    </div>
  )
}

export default mobileSettings
