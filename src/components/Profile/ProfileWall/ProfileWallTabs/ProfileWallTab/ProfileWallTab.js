import React from 'react'

import classes from './ProfileWallTab.module.css'

const profileWallTab = props => {
  const { activeTab, clicked, tab } = props

  const classNames = [classes.ProfileWallTab]
  if (activeTab) {
    classNames.push(classes.ActiveTab)
  }

  return (
    <li
      className={classNames.join(' ')}
      onClick={clicked}
      key={tab}
    >
      {tab}
    </li>
  )
}

export default profileWallTab
