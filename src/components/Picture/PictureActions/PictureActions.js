import React from 'react'

import classes from './PictureActions.module.css'

const pictureActions = props => {
  return (
    <div className={classes.PictureActions}>
      <div className={classes.ButtonActions}>

      </div>
      {props.children}
      <div className={classes.CreatedAt}>

      </div>
      <div className={classes.WriteComment}>

      </div>
    </div>
  )
}

export default pictureActions
