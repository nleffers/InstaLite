import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
// import HomeWall from '../../components/Wall/HomeWall/HomeWall'
// import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'
import withErrorHandler from '../../hoc/withErrorHandler';
// import * as actions from '../../store/actions/index';
import axios from '../../axios/axios';
import classes from './Home.module.css';

const Home = props => {
  let homePage = <Redirect to="/auth" />
  if (props.isAuthenticated) {
    homePage = (
      <Aux>
        <div className={classes.Left}>
          {/* <HomeWall /> */}
        </div>
        <div className={classes.Right}>
          {/* <SuggestedUsers /> */}
        </div>
      </Aux>
    )
  }

  return (
    <Aux>
      {homePage}
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onUserFetch: (username, token) => dispatch(actions.userFetch(username, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));
