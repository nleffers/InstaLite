import React from 'react'

import Tab from '../../UI/Tab/Tab'
import classes from './SettingsTabs.module.css'

const settingsTabs = props => {
  const { activeTab, settingsTabs, tabClickHandler } = props

  const tabsArray = settingsTabs.map(tab => (
    <Tab
      key={tab}
      tab={tab}
      clicked={tabClickHandler}
      activeTab={activeTab === tab}
    />
  ))

  return (
    <div className={classes.SettingsTabs}>
      <ul>
        {tabsArray}
      </ul>
    </div>
  )
}

export default settingsTabs
