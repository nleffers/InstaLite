import React from 'react'

import FileUploader from '../../../../hoc/FileUploader/FileUploader'
import classes from './SettingsPageHeader.module.css'

const settingsPageHeader = props => {
  let profilePictureChangeUploader = null
  if (props.activePage === 'Edit Profile') {
    profilePictureChangeUploader = (
      <FileUploader
        icon="Settings"
        isProfilePicture={true}
        source="settings"
      >
        Change Profile Photo
      </FileUploader>
    )
  }
  return (
    <div className={classes.SettingsPageHeader}>
      <div className={classes.SettingsProfilePicture}>
        {props.profilePictureUrl ? <img className={classes.Image} src={props.profilePictureUrl} alt="Profile" /> : null}
      </div>
      <div className={classes.SettingsProfileUsername}>
        <h1>{props.username}</h1>
        {profilePictureChangeUploader}
      </div>
    </div>
  )
}

export default settingsPageHeader
