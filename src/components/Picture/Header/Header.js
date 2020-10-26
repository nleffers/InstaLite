import React from 'react'

import classes from './Header.module.css'

const header = props => {
  const { username } = props
  return (
    <div className={classes.Header}>
      <div className={classes.Username}>{username}</div>
      <div className={classes.Dropdown}>
        <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5" />
        <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5" />
        <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5" />
      </div>
    </div>
  )
}

export const header
