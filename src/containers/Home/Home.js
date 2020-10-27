import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux';
// import HomeWall from '../../components/Wall/HomeWall/HomeWall'
// import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'
import FileUploader from '../../hoc/FileUploader/FileUploader'
// import * as actions from '../../store/actions/index';
import classes from './Home.module.css';

const Home = () => {
  // const loading = useSelector(state => state.loading)
  // const error = useSelector(state => state.error)
  const isAuthenticated = useSelector(state => state.token !== null)

  let homePage = <Redirect to="/auth" />
  if (isAuthenticated) {
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

export default Home
