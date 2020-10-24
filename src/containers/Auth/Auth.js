import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux'
import BreakLine from '../../components/UI/BreakLine/BreakLine'
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

const Auth = props => {
  const { authRedirectPath, onAuthSetRedirectPath } = props

  const [isSignUp, setIsSignUp] = useState(true)
  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false,
      onSignIn: true
    },
    phone: {
      elementType: 'input',
      elementConfig: {
        type: 'phone',
        placeholder: 'Mobile Number'
      },
      value: '',
      validation: {
        required: true,
        isPhone: true
      },
      valid: true,
      touched: false,
      onSignIn: false
    },
    fullName: {
      elementType: 'input',
      elementConfig: {
        type: 'fullName',
        placeholder: 'Full Name'
      },
      value: '',
      validation: {
        required: isSignUp
      },
      valid: false,
      touched: false,
      onSignIn: false
    },
    username: {
      elementType: 'input',
      elementConfig: {
        type: 'username',
        placeholder: 'Username'
      },
      value: '',
      validation: {
        required: false
      },
      valid: true,
      touched: false,
      onSignIn: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 6 // firebase's minimum password length
      },
      valid: false,
      touched: false,
      onSignIn: true
    }
  })

  useEffect(() => {
    if (authRedirectPath !== '/') {
      onAuthSetRedirectPath()
    }
  }, [authRedirectPath, onAuthSetRedirectPath])

  let authClasses = [classes.Auth]
  if (isSignUp) {
    authClasses = [classes.Auth, classes.SignUp].join(' ')
  }

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controlName].validation),
        touched: !!event.target.value
      })
    })
    setControls(updatedControls)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuthUserLogin(
      controls.email.value,
      controls.password.value,
      isSignUp,
      controls.username.value,
      controls.fullName.value,
      controls.phone.value
    );
  }

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignUp)
  }

  const formElementsArray = [];
  for (let key in controls) {
    if (!isSignUp && !controls[key].onSignIn) { continue }
    formElementsArray.push({
      id: key,
      config: controls[key]
    })
  }

  let form = formElementsArray.map(el => (
    <Input
      key={el.id}
      elementType={el.config.elementType}
      elementConfig={el.config.elementConfig}
      value={el.config.value}
      invalid={!el.config.valid}
      shouldValidate={el.config.validation}
      touched={el.config.touched}
      changed={(event) => inputChangedHandler(event, el.id)}
    />
  ))

  if (props.loading) {
    form = <Spinner />
  }

  let authRedirect = null
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={authRedirectPath} />
  }

  let headerSection = (
    <Aux>
      {authRedirect}
      <h1>InstaLite</h1>
      <div className={classes.SubText}>
        Sign up to see photos from your friends.
      </div>
      <BreakLine word="or" />
    </Aux>
  )
  if (!isSignUp) {
    headerSection = (
      <Aux>
        {authRedirect}
        <h1>InstaLite</h1>
      </Aux>
    )
  }

  let footerSection = null
  if (!isSignUp) {
    footerSection = (
      <Aux>
        <BreakLine word="or" />
        <Button btnType="ForgotPassword">Forgot password?</Button>
      </Aux>
    )
  }

  const switchModeButton = (
    <Button
      btnType="LogInSignUp"
      clicked={switchAuthModeHandler}
    >{isSignUp ? 'Have an account? Log in' : "Don't have an account? Sign Up"}</Button>
  )

  return (
    <Aux>
      <div className={authClasses}>
        {headerSection}
        <form onSubmit={submitHandler}>
          {form}
          <Button btnType="Primary">{isSignUp ? 'Create account' : 'Log In'}</Button>
        </form>
        {footerSection}
      </div>
      <div className={classes.SwitchAuth}>
        {switchModeButton}
      </div>
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authRedirectPath: state.auth.authRedirectPath,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthUserLogin: (email, password, isSignUp, username, fullName, phone) => dispatch(actions.authUserLogin(email, password, isSignUp, username, fullName, phone)),
    onAuthSetRedirectPath: () => dispatch(actions.authSetRedirectPath('/'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
