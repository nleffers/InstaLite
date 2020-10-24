import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import axios from '../../axios/axios'
import withErrorHandler from '../../hoc/withErrorHandler'
import SettingsPage from '../../components/Settings/SettingsPage/SettingsPage'
import SettingsTabs from '../../components/Settings/SettingsTabs/SettingsTabs'
import * as actions from '../../store/actions/index';
import classes from './Settings.module.css'

const Settings = props => {
  const { userId, token, onAuthUserFetch, onAuthUserUpdate } = props
  const [activePage, setActivePage] = useState('EditProfile')

  useEffect(() => {
    onAuthUserFetch(userId, token)
  }, [onAuthUserFetch, userId, token])

  return (
    <div className={classes.Settings}>
      <div className={classes.DesktopOnly}>
        <SettingsTabs
          activeTab={activePage}
          setActivePage={setActivePage}
        />
        <SettingsPage
          loading={props.loading}
          error={props.error}
          onAuthUserUpdate={onAuthUserUpdate}
          activePage={activePage}
        />
      </div>
      <div className={classes.MobileOnly}>
        <SettingsTabs />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    userId: state.auth.userId,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthUserFetch: (userId, token) => dispatch(actions.authUserFetch(userId, token)),
    onAuthUserUpdate: (userId, fullName, username, website, bio, email, phone, gender, token) => (
      dispatch(actions.authUserUpdate(userId, fullName, username, website, bio, email, phone, gender, token))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Settings, axios))
