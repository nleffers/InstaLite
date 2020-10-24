import React from 'react'

import Tab from '../../UI/Tab/Tab'
import classes from './SettingsTabs.module.css'

const settingsTabs = props => {
  const { activeTab, tabClickHandler } = props

  return (
    <div className={classes.SettingsTabs}>
      <ul>
        <Tab
          tab="Edit Profile"
          clicked={tabClickHandler}
          activeTab={activeTab === 'Edit Profile'}
        />
        {/* <Tab
        tab="changePassword"
        clicked={tabClickHandler}
      /> */}
      </ul>
    </div>
  )
}

export default settingsTabs
