import React from 'react'

import classes from './PictureHeader.module.css'

const pictureHeader = props => {
  return (
    <div className={classes.PictureHeader}>
      <div className={classes.Username}>{props.username}</div>
      <svg className={classes.MoreOptions} aria-label="More Options" height="16" width="16" viewBox="0 0 48 48">
        <circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5" />
        <circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5" />
        <circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5" />
      </svg>
    </div>
  )
}

export default pictureHeader
