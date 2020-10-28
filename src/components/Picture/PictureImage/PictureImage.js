import React from 'react'

import classes from './PictureImage.module.css'

const pictureImage = props => {
  return (
    <div className={classes.PictureImage}>
      {props.pictureUrl ? <img className={classes.Image} src={props.pictureUrl} alt="alt" /> : null}
    </div>
  )
}

export default pictureImage
