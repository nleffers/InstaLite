import React from 'react'

import Button from '../../../UI/Button/Button'
import classes from './PictureActions.module.css'

const pictureActions = props => {
  const { authLiked, likeClickedHandler, unlikeClickedHandler } = props

  let likeButton = <Button btnType="OpenHeart" clicked={likeClickedHandler} />
  if (authLiked) {
    likeButton = <Button btnType="Heart" clicked={unlikeClickedHandler} />
  }

  return (
    <div className={classes.PictureActions}>
      <div className={classes.ButtonActions}>
        {likeButton}
      </div>
    </div>
  )
}

export default pictureActions
