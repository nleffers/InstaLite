import React, { useState } from 'react'
import connect from 'react-redux'

import Aux from '../../../../../hoc/Aux'
import Button from '../../../../Ui/Button/Button'
import InputWithLabel from '../../../../UI/InputWithLabel/InputWithLabel'
import * as actions from '../../../../../store/actions/index'
import classes from './EditProfile.module.css'
import { updateObject, checkValidity } from '../../shared/utility';

const editProfile = props => {
  const [profileElements, setProfileElements] = useState({
    fullName: {
      elementType: 'input',
      elementConfig: {
        type: 'fullName',
        placeholder: 'Name',
        label: 'Name'
      },
      value: '',
      validation: { required: true },
      valid: false,
      touched: false
    },
    username: {
      elementType: 'input',
      elementConfig: {
        type: 'username',
        placeholder: 'Username',
        label: 'Label'
      },
      value: '',
      validation: { required: true },
      valid: true,
      touched: false
    },
    website: {
      elementType: 'input',
      elementConfig: {
        type: 'website',
        placeholder: 'Website',
        label: 'Label'
      },
      value: '',
      validation: { required: false },
      valid: true,
      touched: false
    },
    bio: {
      elementType: 'textarea',
      elementConfig: {
        type: 'bio',
        placeholder: '',
        label: 'Bio'
      },
      value: '',
      validation: { required: false },
      valid: true,
      touched: false
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email',
        label: 'Email'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    phone: {
      elementType: 'input',
      elementConfig: {
        type: 'phone',
        placeholder: 'Phone Number',
        label: 'Phone Number'
      },
      value: '',
      validation: {
        required: false,
        isPhone: true
      },
      valid: true,
      touched: false
    },
    gender: {
      elementType: 'input',
      elementConfig: {
        type: 'gender',
        placeholder: 'Gender',
        placeholder: 'Gender'
      },
      value: '',
      validation: { required: false },
      valid: true,
      touched: false
    }
  })

  const inputChangedHandler = (event, elementName) => {
    const updatedProfileElements = updateObject(profileElements, {
      [elementName]: updateObject(profileElements[elementName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, profileElements[elementName].validation),
        touched: !!event.target.value
      })
    })
    setProfileElements(updatedProfileElements)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuthUserUpdate(
      profileElements.fullName.value,
      profileElements.username.value,
      profileElements.website.value,
      profileElements.bio.value,
      profileElements.email.value,
      profileElements.phone.value,
      profileElements.gender.value
    );
  }

  let form = (
    <Aux>
      <InputWithLabel
        key="fullName"
        elementType={profileElements.fullName.elementType}
        elementConfig={profileElements.fullName.elementConfig}
        value={profileElements.fullName.value}
        invalid={!profileElements.fullName.valid}
        shouldValidate={profileElements.fullName.validation}
        touched={profileElements.fullName.touched}
        changed={event => inputChangedHandler(event, 'fullName')}
      />
      <p>
        Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
      </p>
      <InputWithLabel
        key="username"
        elementType={profileElements.username.elementType}
        elementConfig={profileElements.username.elementConfig}
        value={profileElements.username.value}
        invalid={!profileElements.username.valid}
        shouldValidate={profileElements.username.validation}
        touched={profileElements.username.touched}
        changed={event => inputChangedHandler(event, 'username')}
      />
      <InputWithLabel
        key="website"
        elementType={profileElements.website.elementType}
        elementConfig={profileElements.website.elementConfig}
        value={profileElements.website.value}
        invalid={!profileElements.website.valid}
        shouldValidate={profileElements.website.validation}
        touched={profileElements.website.touched}
        changed={event => inputChangedHandler(event, 'website')}
      />
      <InputWithLabel
        key="bio"
        elementType={profileElements.bio.elementType}
        elementConfig={profileElements.bio.elementConfig}
        value={profileElements.bio.value}
        invalid={!profileElements.bio.valid}
        shouldValidate={profileElements.bio.validation}
        touched={profileElements.bio.touched}
        changed={event => inputChangedHandler(event, 'bio')}
      />
      <p style={{ fontWeight: 'bold' }}>
        Personal Information
      </p>
      <p>
        Provide your personal information, even if the account is used for a business, a pet, or something else. This won't be a part of your public profile.
      </p>
      <InputWithLabel
        key="email"
        elementType={profileElements.email.elementType}
        elementConfig={profileElements.email.elementConfig}
        value={profileElements.email.value}
        invalid={!profileElements.email.valid}
        shouldValidate={profileElements.email.validation}
        touched={profileElements.email.touched}
        changed={event => inputChangedHandler(event, 'email')}
      />
      <InputWithLabel
        key="phone"
        elementType={profileElements.phone.elementType}
        elementConfig={profileElements.phone.elementConfig}
        value={profileElements.phone.value}
        invalid={!profileElements.phone.valid}
        shouldValidate={profileElements.phone.validation}
        touched={profileElements.phone.touched}
        changed={event => inputChangedHandler(event, 'phone')}
      />
      <InputWithLabel
        key="gender"
        elementType={profileElements.gender.elementType}
        elementConfig={profileElements.gender.elementConfig}
        value={profileElements.gender.value}
        invalid={!profileElements.gender.valid}
        shouldValidate={profileElements.gender.validation}
        touched={profileElements.gender.touched}
        changed={event => inputChangedHandler(event, 'gender')}
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
    <div className={classes.EditProfile}>
      <h2>{profileElements.username}</h2>
      <form onSubmit={submitHandler}>
        {form}
        {errorMessage}
        <Button btnType="Primary">Submit</Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthUserUpdate: (userId, fullName, username, website, bio, email, phone, gender, token) => (
      dispatch(actions.AuthUserUpdate(userId, fullName, username, website, bio, email, phone, gender, token))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(editProfile)
