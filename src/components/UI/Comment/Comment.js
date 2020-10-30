import React from 'react'

import classes from './Comment.module.css'

const comment = props => {
  return (
    <div className={classes.Comment}>
      {props.comment.username}: {props.comment.comment}
    </div>
  )
}

export default comment
