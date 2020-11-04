import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Comment.module.css'

const comment = props => {
  return (
    <li className={classes.CommentListItem}>
      <div className={classes.Comment}>
        <div className={classes.CommentContents}>
          <span className={classes.CommentUsername}>
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
          </span>
          {props.comment.comment}
        </div>
      </div>

    </li>
  )
}

export default comment
