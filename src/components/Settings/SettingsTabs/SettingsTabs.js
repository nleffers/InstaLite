import React from 'react'

import Tab from '../../UI/Tab/Tab'
import classes from './SettingsTabs.module.css'

const settingsTabs = props => {
  const { activeTab, setActiveTab } = props

  const tabClickHandler = event => {
    event.preventDefault()
    setActiveTab(event.target.value)
  }

  return (
    <div className={classes.SettingsTabs}>
      <ul>
        <Tab
          tab="EditProfile"
          clicked={tabClickHandler}
          activeTab={activeTab === 'EditProfile'}
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
