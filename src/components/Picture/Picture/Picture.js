import React from 'react'

import classes from './Picture.module.css'

const picture = props => {
  return (
    <div className={classes.Picture}>
      {props.pictureUrl ? <img className={classes.Image} src={props.pictureUrl} alt="alt" /> : null}
    </div>
  )
}

export default picture
