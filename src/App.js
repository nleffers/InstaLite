import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth')
});

const Home = React.lazy(() => {
  return import('./containers/Home/Home')
})

const Settings = React.lazy(() => {
  return import('./containers/Settings/Settings')
})

const Profile = React.lazy(() => {
  return import('./containers/Profile/Profile')
})

// const Inbox = React.lazy(() => {
//   return import('./containers/Inbox/Inbox')
// })

// const Activity = React.lazy(() => {
//   return import('./containers/Activity/Activity')
// })

const App = props => {
  const { isAuthenticated, userId, onTryAutoSignIn } = props

  useEffect(() => {
    onTryAutoSignIn()
  }, [onTryAutoSignIn])

  let routes = (
    <Switch>
      <Route path="/auth" component={props => <Auth {...props} />} />
      <Route path="/" exact component={props => <Home {...props} />} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        {/* <Route path="/inbox" component={props => <Inbox {...props} />} /> */}
        {/* <Route path="/explore" component={props => <Explore {...props} />} /> */}
        {/* <Route path="/activity" component={props => <Likes {...props} />} /> */}
        <Route path="/profile" component={props => <Profile {...props} />} />
        <Route path="/settings" component={props => <Settings {...props} />} />
        <Route path="/auth" component={props => <Auth {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={props => <Home {...props} />} />
      </Switch>
    )
  }
  return (
    <div>
      <Layout
        isAuthenticated={isAuthenticated}
        userId={userId}
      >
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authUserCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
