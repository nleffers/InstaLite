import React from 'react'

import Button from '../../../../UI/Button/Button'
import InputWithLabel from '../../../../UI/InputWithLabel/InputWithLabel'
import classes from './ChangePasswordPage.module.css'

const changePasswordPage = props => {
  return (
    <div className={classes.ChangePasswordPage}>
      <form onSubmit={props.changePasswordSubmitHandler}>
        <InputWithLabel
          key="oldPassword"
          elementType={props.oldPassword.elementType}
          elementConfig={props.oldPassword.elementConfig}
          value={props.oldPassword.value}
          invalid={!props.oldPassword.valid}
          shouldValidate={props.oldPassword.validation}
          touched={props.oldPassword.touched}
          changed={event => props.editProfileInputChangedHandler(event, 'oldPassword')}
        />
        <InputWithLabel
          key="newPassword"
          elementType={props.newPassword.elementType}
          elementConfig={props.newPassword.elementConfig}
          value={props.newPassword.value}
          invalid={!props.newPassword.valid}
          shouldValidate={props.newPassword.validation}
          touched={props.newPassword.touched}
          changed={event => props.editProfileInputChangedHandler(event, 'newPassword')}
        />
        <Button btnType="UpdateUser">Change Password</Button>
      </form>
    </div>
  )
}

export default changePasswordPage
