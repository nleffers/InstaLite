import React, { useState } from 'react'

import Tab from '../../UI/Tab/Tab'
import classes from './SettingsTabs.module.css'

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState('editProfile')

  const tabClickHandler = event => {
    event.preventDefault()
    setActiveTab(event.target.value)
  }

  return (
    <ul className={classes.SettingsTabs}>
      <Tab
        tab="editProfile"
        clicked={tabClickHandler}
      />
      <Tab
        tab="changePassword"
        clicked={tabClickHandler}
      />
    </ul>
  )
}

export default SettingsTabs
