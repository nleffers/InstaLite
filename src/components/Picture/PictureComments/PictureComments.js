import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <div className={classes.ProfilePicture}>
          <canvas height="42" width="21" />
          {!!props.profilePicture ? (
            <NavLink
              to={{
                pathname: '/profile',
                state: {
                  userId: props.userId
                }
              }}
            >
              <img src={props.profilePicture.url} alt={props.profilePicture.id} />
            </NavLink>
          ) : null}
        </div>
        <div className={classes.Username}>
          <NavLink
            to={{
              pathname: '/profile',
              state: {
                userId: props.userId
              }
            }}
          >
            {props.username}
          </NavLink>
        </div>
      </div>
      <div className={classes.Comments}>
        {commentElementsArray}
      </div>
    </div>
  )
}

export default pictureComments
