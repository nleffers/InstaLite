import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SettingsPage from '../../components/Settings/SettingsPage/SettingsPage'
import SettingsTabs from '../../components/Settings/SettingsTabs/SettingsTabs'
import * as actions from '../../store/actions/index';
import classes from './Settings.module.css'
import { updateObject, checkValidity } from '../../shared/utility';

const Settings = props => {
  const [activePage, setActivePage] = useState(props.location.state.activePage || 'Edit Profile')
  const [settingsTabs] = useState([
    'Edit Profile',
    'Change Password'
  ])
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
  const [oldPassword, setOldPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'oldPassword',
      label: 'Old Password'
    },
    value: '',
    validation: {
      required: true,
      minLength: 6
    },
    valid: false,
    touched: false
  })
  const [newPassword, setNewPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'newPassword',
      label: 'New Password'
    },
    value: '',
    validation: {
      required: true,
      minLength: 6
    },
    valid: false,
    touched: false
  })

  const userId = useSelector(state => state.userId)
  const token = useSelector(state => state.token)
  const username = useSelector(state => state.username)
  const fullName = useSelector(state => state.fullName)
  const website = useSelector(state => state.website)
  const bio = useSelector(state => state.bio)
  const email = useSelector(state => state.email)
  const phone = useSelector(state => state.phone)
  const gender = useSelector(state => state.gender)
  const loading = useSelector(state => state.loading)
  const profilePictureUrl = useSelector(state => state.profilePicture.url)

  const dispatch = useDispatch()
  const onAuthUserUpdate = (userId, fullName, username, website, bio, email, phone, gender) => (
    dispatch(actions.authUserUpdate(userId, fullName, username, website, bio, email, phone, gender))
  )
  const onAuthUserChangePassword = (email, oldPassword, newPassword) => dispatch(actions.authUserChangePassword(email, oldPassword, newPassword))

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
      case 'oldPassword':
        object = oldPassword
        setStateFunction = setOldPassword
        break
      case 'newPassword':
        object = newPassword
        setStateFunction = setNewPassword
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

  const editProfileSubmitHandler = event => {
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

  const changePasswordSubmitHandler = event => {
    event.preventDefault()
    onAuthUserChangePassword(email, oldPassword.value, newPassword.value)
    setOldPassword(prevPassword => ({
      ...prevPassword,
      value: ''
    }))
    setNewPassword(prevPassword => ({
      ...prevPassword,
      value: ''
    }))
  }

  return (
    <div className={classes.Settings}>
      <div className={classes.DesktopOnly}>
        <SettingsTabs
          activeTab={activePage}
          settingsTabs={settingsTabs}
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
          oldPassword={oldPassword}
          newPassword={newPassword}
          profilePictureUrl={profilePictureUrl}
          editProfileInputChangedHandler={editProfileInputChangedHandler}
          editProfileSubmitHandler={editProfileSubmitHandler}
          changePasswordSubmitHandler={changePasswordSubmitHandler}
          loading={loading}
        />
      </div>
      <div className={classes.MobileOnly}>
        <SettingsTabs
          activeTab={activePage}
          settingsTabs={settingsTabs}
          tabClickHandler={tabClickHandler}
        />
      </div>
    </div>
  )
}

export default Settings
