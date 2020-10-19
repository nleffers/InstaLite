import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

const Auth = props => {
  const { authRedirectPath, onSetAuthRedirectPath } = props

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
      onSetAuthRedirectPath()
    }
  }, [authRedirectPath, onSetAuthRedirectPath])

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
    props.onAuth(
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
    });
  };

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
  ));

  if (props.loading) {
    form = <Spinner />
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }

  let authRedirect = null
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={authRedirectPath} />
  }

  let submit = (
    <Button
      btnType="Tertiary"
      clicked={switchAuthModeHandler}
    >Or sign in</Button>
  )
  if (!isSignUp) {
    submit = (
      <Aux>
        <Button btnType="Tertiary">Forgot password?</Button>
        <Button
          btnType="Secondary"
          clicked={switchAuthModeHandler}
        >Create your TargetReact account</Button>
      </Aux>
    )
  }

  return (
    <div className={classes.Auth}>
      <h2>InstaLite</h2>
      {authRedirect}
      <form onSubmit={submitHandler}>
        {form}
        {errorMessage}
        <Button btnType="Primary">{isSignUp ? 'Create account' : 'Sign In'}</Button>
      </form>
      <br />
      {submit}
    </div>
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
    onAuth: (email, password, isSignUp, username, fullName, phone) => dispatch(actions.auth(email, password, isSignUp, username, fullName, phone)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
