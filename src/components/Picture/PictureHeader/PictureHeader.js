import React from 'react'

import classes from './PictureHeader.module.css'

const pictureHeader = props => {
  const { username } = props
  return (
    <div className={classes.Header}>
      <div className={classes.Username}>{username}</div>
      <div className={classes.Dropdown}>
        {/* <circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5" />
        <circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5" />
        <circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5" /> */}
      </div>
    </div>
  )
}

export default pictureHeader
