import React from 'react'

import Comment from '../../UI/Comment/Comment'
import classes from './PictureComments.module.css'

const pictureComments = props => {
  const { caption, comments, username } = props

  const commentsArray = []
  for (let key in comments) {
    commentsArray.push({
      ...comments[key],
      id: key
    })
  }

  const commentElementsArray = commentsArray.map(comment => (
    <Comment
      key={comment.id}
      comment={comment}
    />
  ))

  return (
    <div className={classes.PictureComments}>
      <div className={classes.Caption}>
        <div className={classes.Username}>
          {username}
        </div>
        <div className={classes.Caption}>
          {caption}
        </div>
        <div className={classes.CreatedAtDesktopOnly}>
          {/* {createdAt} */}
        </div>
      </div>
      <div className={classes.Comments}>
        {commentElementsArray}
      </div>
    </div>
  )
}

export default pictureComments
