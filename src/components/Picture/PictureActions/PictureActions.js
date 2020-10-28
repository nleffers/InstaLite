import React from 'react'

import classes from './PictureActions.module.css'

const pictureActions = props => {
  return (
    <div className={classes.PictureActions}>
      {props.children}
    </div>
  )
}

export default pictureActions
