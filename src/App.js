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

const App = props => {
  const { onTryAutoSignIn } = props

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
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        {/* <Route path="/inbox" component={props => <Inbox {...props} />} />
        <Route path="/explore" component={props => <Explore {...props} />} />
        <Route path="/likes" component={props => <Likes {...props} />} />
        <Route path="/profile" component={props => <Profile {...props} />} /> */}
        <Route path="/auth" component={props => <Auth {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={props => <Home {...props} />} />
      </Switch>
    )
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
