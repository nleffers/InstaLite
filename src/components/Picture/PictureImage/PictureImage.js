import React from 'react'

import classes from './PictureImage.module.css'

const pictureImage = props => {
  return (
    <div className={classes.PictureImage}>
      {props.url ? <img className={classes.Image} src={props.url} alt="alt" /> : null}
    </div>
  )
}

export default pictureImage
