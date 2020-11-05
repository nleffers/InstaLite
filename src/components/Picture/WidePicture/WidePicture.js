import React from 'react'

import PictureActions from '../shared/PictureActions/PictureActions'
import PictureComments from '../shared/PictureComments/PictureComments'
import PictureHeader from '../shared/PictureHeader/PictureHeader'
import PictureImage from '../shared/PictureImage/PictureImage'
import PictureWriteComment from '../shared/PictureWriteComment/PictureWriteComment'
import classes from './WidePicture.module.css'

const widePicture = props => {
  const { authUserId, newComment, picture, user, likeClickedHandler, unlikeClickedHandler, editCommentHandler, submitCommentHandler } = props

  return (
    <div className={classes.WidePicture}>
      <div className={classes.WideLeftSide}>
        <PictureImage url={picture.url} />
      </div>
      <div className={classes.WideRightSide}>
        <PictureHeader
          profilePicture={user.profilePicture}
          userId={user.userId}
          username={user.username}
        />
        <div className={classes.PictureInteractionSection}>
          <PictureComments
            comments={picture.comments}
            profilePicture={user.profilePicture}
            userId={user.userId}
            username={user.username}
          />
          <PictureActions
            authLiked={picture.likes.some(like => like.userId === authUserId)}
            likeClickedHandler={likeClickedHandler}
            unlikeClickedHandler={unlikeClickedHandler}
          />
          <PictureWriteComment
            comment={newComment}
            editCommentHandler={editCommentHandler}
            submitCommentHandler={submitCommentHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default widePicture
