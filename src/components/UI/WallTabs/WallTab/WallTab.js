import React from 'react'

import classes from './WallTab.module.css'

const wallTab = props => {
  const { activeTab, clicked, tab } = props

  const classNames = [classes.WallTab]
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

export default wallTab
