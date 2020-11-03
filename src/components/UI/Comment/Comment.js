import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Comment.module.css'

const comment = props => {
  return (
    <li className={classes.CommentListItem}>
      <div className={classes.Comment}>
        <div className={classes.CommentContents}>
          <div className={classes.CommentUsername}>
            <NavLink
              to={{
                pathname: '/profile',
                state: {
                  userId: props.comment.userId
                }
              }}
            >
              {props.comment.username}
            </NavLink>
          </div>
          <span className={classes.CommentComment}>
            {props.comment.comment}
          </span>
        </div>
      </div>

    </li>
  )
}

export default comment
