import React from 'react'

import classes from './Tab.module.css'

const tab = props => {
  let label = null
  switch (props.tab) {
    case 'editProfile':
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
      className={classes.Tab}
      onClick={props.clicked}
    >
      {label}
    </li>
  )
}

export default tab
