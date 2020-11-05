import React from 'react'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import classes from './PictureWriteComment.module.css'

const pictureWriteComment = props => (
  <div className={classes.WriteCommentSection}>
    <div className={classes.WriteComment}>
      <form
        className={classes.WriteCommentForm}
        onSubmit={props.submitCommentHandler}
      >
        <Input
          key="comment"
          elementType="textarea"
          elementConfig={{
            type: 'comment',
            placeholder: 'Add a comment...'
          }}
          value={props.comment.comment}
          changed={props.editCommentHandler}
        />
        <Button btnType="Comment">Post</Button>
      </form>
    </div>
  </div>
)

export default pictureWriteComment
