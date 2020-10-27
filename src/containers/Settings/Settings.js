import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SettingsPage from '../../components/Settings/SettingsPage/SettingsPage'
import SettingsTabs from '../../components/Settings/SettingsTabs/SettingsTabs'
import * as actions from '../../store/actions/index';
import classes from './Settings.module.css'
import { updateObject, checkValidity } from '../../shared/utility';

const Settings = props => {
  const [activePage, setActivePage] = useState(props.location.activePage || 'Edit Profile')
  const [profileFullName, setProfileFullName] = useState({
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
  })
  const [profileUsername, setProfileUsername] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'username',
      placeholder: 'Username',
      label: 'Username'
    },
    value: '',
    validation: { required: true },
    valid: true,
    touched: false
  })
  const [profileWebsite, setProfileWebsite] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'website',
      placeholder: 'Website',
      label: 'Website'
    },
    value: '',
    validation: { required: false },
    valid: true,
    touched: false
  })
  const [profileBio, setProfileBio] = useState({
    elementType: 'textarea',
    elementConfig: {
      type: 'bio',
      label: 'Bio'
    },
    value: '',
    validation: {
      required: false,
      characterLimit: 150
    },
    valid: true,
    touched: false
  })
  const [profileEmail, setProfileEmail] = useState({
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
  })
  const [profilePhone, setProfilePhone] = useState({
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
  })
  const [profileGender, setProfileGender] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'gender',
      placeholder: 'Gender',
      label: 'Gender'
    },
    value: '',
    validation: { required: false },
    valid: true,
    touched: false
  })

  const userId = useSelector(state => state.auth.userId)
  const token = useSelector(state => state.auth.token)
  const username = useSelector(state => state.auth.username)
  const fullName = useSelector(state => state.auth.fullName)
  const website = useSelector(state => state.auth.website)
  const bio = useSelector(state => state.auth.bio)
  const email = useSelector(state => state.auth.email)
  const phone = useSelector(state => state.auth.phone)
  const gender = useSelector(state => state.auth.gender)
  const loading = useSelector(state => state.auth.loading)

  const dispatch = useDispatch()
  const onAuthUserFetch = useCallback(userId => dispatch(actions.authUserFetch(userId)), [dispatch])
  const onAuthUserUpdate = (userId, fullName, username, website, bio, email, phone, gender) => (
    dispatch(actions.authUserUpdate(userId, fullName, username, website, bio, email, phone, gender))
  )

  useEffect(() => {
    onAuthUserFetch(userId)
  }, [onAuthUserFetch, userId])

  useEffect(() => {
    setProfileBio(prevState => ({
      ...prevState,
      value: bio
    }))
  }, [setProfileBio, bio])

  useEffect(() => {
    setProfileEmail(prevState => ({
      ...prevState,
      value: email
    }))
  }, [setProfileEmail, email])

  useEffect(() => {
    setProfileFullName(prevState => ({
      ...prevState,
      value: fullName
    }))
  }, [setProfileFullName, fullName])

  useEffect(() => {
    setProfileGender(prevState => ({
      ...prevState,
      value: gender
    }))
  }, [setProfileGender, gender])

  useEffect(() => {
    setProfilePhone(prevState => ({
      ...prevState,
      value: phone
    }))
  }, [setProfilePhone, phone])

  useEffect(() => {
    setProfileUsername(prevState => ({
      ...prevState,
      value: username
    }))
  }, [setProfileUsername, username])

  useEffect(() => {
    setProfileWebsite(prevState => ({
      ...prevState,
      value: website
    }))
  }, [setProfileWebsite, website])

  const tabClickHandler = event => {
    event.preventDefault()
    setActivePage(event.target.innerText)
  }

  const editProfileInputChangedHandler = (event, elementName) => {
    let object
    let setStateFunction
    switch (elementName) {
      case 'fullName':
        object = profileFullName
        setStateFunction = setProfileFullName
        break
      case 'username':
        object = profileUsername
        setStateFunction = setProfileUsername
        break
      case 'website':
        object = profileWebsite
        setStateFunction = setProfileWebsite
        break
      case 'bio':
        object = profileBio
        setStateFunction = setProfileBio
        break
      case 'email':
        object = profileEmail
        setStateFunction = setProfileEmail
        break
      case 'phone':
        object = profilePhone
        setStateFunction = setProfilePhone
        break
      case 'gender':
        object = profileGender
        setStateFunction = setProfileGender
        break
      default:
        return
    }

    const updatedElement = updateObject(
      object,
      {
        value: event.target.value,
        valid: checkValidity(event.target.value, object.validation),
        touched: !!event.target.value
      }
    )
    setStateFunction(updatedElement)
  }

  const editProfileSubmitHandler = (event) => {
    event.preventDefault();
    onAuthUserUpdate(
      userId,
      profileFullName.value,
      profileUsername.value,
      profileWebsite.value,
      profileBio.value,
      profileEmail.value,
      profilePhone.value,
      profileGender.value,
      token
    );
  }

  return (
    <div className={classes.Settings}>
      <div className={classes.DesktopOnly}>
        <SettingsTabs
          activeTab={activePage}
          tabClickHandler={tabClickHandler}
        />
        <SettingsPage
          activePage={activePage}
          fullName={profileFullName}
          username={profileUsername}
          website={profileWebsite}
          bio={profileBio}
          email={profileEmail}
          phone={profilePhone}
          gender={profileGender}
          editProfileInputChangedHandler={editProfileInputChangedHandler}
          editProfileSubmitHandler={editProfileSubmitHandler}
          loading={loading}
        />
      </div>
      <div className={classes.MobileOnly}>
        <SettingsTabs />
      </div>
    </div>
  )
}

export default Settings
