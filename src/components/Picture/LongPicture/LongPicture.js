import React from 'react'

import PictureActions from '../shared/PictureActions/PictureActions'
import PictureComments from '../shared/PictureComments/PictureComments'
import PictureHeader from '../shared/PictureHeader/PictureHeader'
import PictureImage from '../shared/PictureImage/PictureImage'
import classes from './LongPicture.module.css'

const longPicture = props => {
  const { authUserId, newComment, picture, user, likeClickedHandler, unlikeClickedHandler, editCommentHandler, submitCommentHandler } = props

  return (
    <div className={classes.LongPicture}>
      <PictureHeader
        profilePicture={user.profilePicture}
        userId={user.userId}
        username={user.username}
      />
      <PictureImage url={picture.url} />
      <PictureActions
        authLiked={picture.likes.some(like => like.userId === authUserId)}
        likeClicked={likeClickedHandler}
        unlikeClicked={unlikeClickedHandler}
        comment={newComment}
        editCommentHandler={editCommentHandler}
        submitCommentHandler={submitCommentHandler}
      >
        <PictureComments
          comments={picture.comments}
          profilePicture={user.profilePicture}
          userId={user.userId}
          username={user.username}
        />
      </PictureActions>
    </div>
  )
}

export default longPicture
