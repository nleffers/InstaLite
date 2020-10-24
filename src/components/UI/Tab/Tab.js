import React from 'react'

import classes from './Tab.module.css'

const tab = props => {
  const { activeTab, clicked, tab } = props

  const classNames = [classes.Tab]
  if (activeTab) {
    classNames.push(classes.ActiveTab)
  }

  let label = null
  switch (tab) {
    case 'Edit Profile':
      label = 'Edit Profile'
      break
    case 'change Password':
      label = 'Change Password'
      break
    default:
      break
  }
  return (
    <li
      className={classNames.join(' ')}
      onClick={clicked}
      key={tab}
    >
      {label}
    </li>
  )
}

export default tab
