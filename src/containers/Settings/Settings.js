import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import axios from '../../axios/axios'
import Aux from '../../hoc/Aux';
import withErrorHandler from '../../hoc/withErrorHandler'
import SettingsPages from '../../components/Settings/SettingsPages/SettingsPages'
import SettingsTabs from '../../components/Settings/SettingsTabs/SettingsTabs'
import * as actions from '../../store/actions/index';
// import classes from './Settings.module.css'

const Settings = props => {
  const { userId, token, onUserFetch } = props

  useEffect(() => {
    onUserFetch(userId, token)
  }, [onUserFetch, userId, token])

  return (
    <Aux>
      <SettingsTabs />
      <SettingsPages />
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    userId: state.auth.userId,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserFetch: (userId, token) => dispatch(actions.userFetch(userId, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Settings, axios))
