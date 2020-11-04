import React from 'react'

import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'
import classes from './PictureActions.module.css'

const pictureActions = props => {
  const { authLiked, comment, editCommentHandler, submitCommentHandler, likeClickedHandler, unlikeClickedHandler } = props

  let likeButton = <Button btnType="OpenHeart" clicked={likeClickedHandler} />
  if (authLiked) {
    likeButton = <Button btnType="Heart" clicked={unlikeClickedHandler} />
  }

  return (
    <div className={classes.PictureActions}>
      <div className={classes.ButtonActions}>
        {likeButton}
      </div>
      {props.children}
      <div className={classes.WriteCommentSection}>
        <div className={classes.WriteComment}>
          <form
            className={classes.WriteCommentForm}
            onSubmit={submitCommentHandler}
          >
            <Input
              key="comment"
              elementType="textarea"
              elementConfig={{
                type: 'comment',
                placeholder: 'Add a comment...'
              }}
              value={comment.comment}
              changed={editCommentHandler}
            />
            <Button btnType="Comment">Post</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default pictureActions
