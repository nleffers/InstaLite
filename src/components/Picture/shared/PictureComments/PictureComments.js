import React from 'react'

import Comment from '../../../UI/Comment/Comment'
import classes from './PictureComments.module.css'

const pictureComments = props => {
  const commentsArray = []
  for (let key in props.comments) {
    commentsArray.push({
      ...props.comments[key],
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
      <ul className={classes.PictureCommentsList}>
        {commentElementsArray}
      </ul>
    </div>
  )
}

export default pictureComments
