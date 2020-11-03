import React from 'react'

import SettingsPage from '../SettingsPage/SettingsPage'
import SettingsTabs from '../SettingsTabs/SettingsTabs'
import classes from './MobileSettings.module.css'

const mobileSettings = props => {
  return (
    <div className={classes.MobileSettings}>
      <SettingsTabs
        activeTab={props.activePage}
        settingsTabs={props.settingsTabs}
        tabClickHandler={props.tabClickHandler}
      />
    </div>
  )
}

export default mobileSettings
