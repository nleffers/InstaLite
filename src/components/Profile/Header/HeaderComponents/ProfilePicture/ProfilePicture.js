import React from 'react'

import classes from './ProfilePicture.module.css'

const profilePicture = props => (
  <div className={classes.ProfilePicture}>
    {props.pictureUrl ? <img className={classes.Image} src={props.pictureUrl} alt="Profile" /> : null}
  </div>
)

export default profilePicture
