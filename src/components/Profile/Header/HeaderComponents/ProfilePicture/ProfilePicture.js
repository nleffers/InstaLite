import React from 'react'

import classes from './ProfilePicture.module.css'

const profilePicture = props => {
  const { pictureUrl } = props

  return (
    <div className={classes.ProfilePicture}>
      {pictureUrl ? <img className={classes.Image} src={pictureUrl} alt="Profile"/> : null}
    </div>
  )
}

export default profilePicture
