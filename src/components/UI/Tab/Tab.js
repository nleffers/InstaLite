import React from 'react'

import classes from './Tab.module.css'

const tab = props => {
  const classNames = [classes.Tab]
  if (props.activeTab) {
    classNames.push(classes.ActiveTab)
  }

  let label = null
  switch (props.tab) {
    case 'EditProfile':
      label = 'Edit Profile'
      break
    case 'changePassword':
      label = 'Change Password'
      break
    default:
      break
  }
  return (
    <li
      className={classNames.join(' ')}
      onClick={props.clicked}
    >
      {label}
    </li>
  )
}

export default tab
