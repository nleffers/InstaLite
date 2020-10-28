import React from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

import Profile from '../Profile/Profile'
import classes from './Home.module.css';

const Home = () => {
  const userId = useSelector(state => state.userId)
  const isAuthenticated = useSelector(state => state.token !== null)

  let homePage = <Redirect to="/auth" />
  if (isAuthenticated) {
    homePage = <Profile location={{ userId: userId }} />
  }

  return (
    <div className={classes.Home}>
      {homePage}
    </div>
  )
}

export default Home
