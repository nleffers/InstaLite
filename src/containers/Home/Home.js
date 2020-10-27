import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
// import HomeWall from '../../components/Wall/HomeWall/HomeWall'
// import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'
import FileUploader from '../../components/UI/FileUploader/FileUploader'
// import * as actions from '../../store/actions/index';
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
        <div className={classes.DesktopUpload}>
          <FileUploader icon="DesktopUpload" source="desktop" />
        </div>
      </Aux>
    )
  }

  return (
    <div className={classes.Home}>
      {homePage}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onAuthUserFetch: (token) => dispatch(actions.authUserFetch(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
