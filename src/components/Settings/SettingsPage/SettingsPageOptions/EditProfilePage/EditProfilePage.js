import React from 'react'

import Aux from '../../../../../hoc/Aux'
import Button from '../../../../UI/Button/Button'
import Spinner from '../../../../UI/Spinner/Spinner'
import InputWithLabel from '../../../../UI/InputWithLabel/InputWithLabel'
import classes from './EditProfilePage.module.css'

const editProfilePage = props => {
  const { fullName, username, website, bio, email, phone, gender, editProfileInputChangedHandler, editProfileSubmitHandler } = props

  let form = (
    <Aux>
      <InputWithLabel
        key="fullName"
        elementType={fullName.elementType}
        elementConfig={fullName.elementConfig}
        value={fullName.value}
        invalid={!fullName.valid}
        shouldValidate={fullName.validation}
        touched={fullName.touched}
        changed={event => editProfileInputChangedHandler(event, 'fullName')}
      />
      <p>
        Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
      </p>
      <InputWithLabel
        key="username"
        elementType={username.elementType}
        elementConfig={username.elementConfig}
        value={username.value}
        invalid={!username.valid}
        shouldValidate={username.validation}
        touched={username.touched}
        changed={event => editProfileInputChangedHandler(event, 'username')}
      />
      <InputWithLabel
        key="website"
        elementType={website.elementType}
        elementConfig={website.elementConfig}
        value={website.value}
        invalid={!website.valid}
        shouldValidate={website.validation}
        touched={website.touched}
        changed={event => editProfileInputChangedHandler(event, 'website')}
      />
      <InputWithLabel
        key="bio"
        elementType={bio.elementType}
        elementConfig={bio.elementConfig}
        value={bio.value}
        invalid={!bio.valid}
        shouldValidate={bio.validation}
        touched={bio.touched}
        changed={event => editProfileInputChangedHandler(event, 'bio')}
      />
      <p style={{ fontWeight: 'bold' }}>
        Personal Information
      </p>
      <p>
        Provide your personal information, even if the account is used for a business, a pet, or something else. This won't be a part of your public profile.
      </p>
      <InputWithLabel
        key="email"
        elementType={email.elementType}
        elementConfig={email.elementConfig}
        value={email.value}
        invalid={!email.valid}
        shouldValidate={email.validation}
        touched={email.touched}
        changed={event => editProfileInputChangedHandler(event, 'email')}
      />
      <InputWithLabel
        key="phone"
        elementType={phone.elementType}
        elementConfig={phone.elementConfig}
        value={phone.value}
        invalid={!phone.valid}
        shouldValidate={phone.validation}
        touched={phone.touched}
        changed={event => editProfileInputChangedHandler(event, 'phone')}
      />
      <InputWithLabel
        key="gender"
        elementType={gender.elementType}
        elementConfig={gender.elementConfig}
        value={gender.value}
        invalid={!gender.valid}
        shouldValidate={gender.validation}
        touched={gender.touched}
        changed={event => editProfileInputChangedHandler(event, 'gender')}
      />
    </Aux>
  )

  if (props.loading) {
    form = <Spinner />
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }

  return (
    <div className={classes.EditProfilePage}>
      <h2>{username.value}</h2>
      <form onSubmit={editProfileSubmitHandler}>
        {form}
        {errorMessage}
        <Button
          btnType="UpdateUser"
        >Submit</Button>
      </form>
    </div>
  )
}

export default editProfilePage
