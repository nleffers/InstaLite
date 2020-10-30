import React, { useEffect, useCallback, Suspense } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './hoc/Layout/Layout'
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/index'

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth')
})

const Home = React.lazy(() => {
  return import('./containers/Home/Home')
})

const Settings = React.lazy(() => {
  return import('./containers/Settings/Settings')
})

const Profile = React.lazy(() => {
  return import('./containers/Profile/Profile')
})

const Picture = React.lazy(() => {
  return import('./containers/Picture/Picture')
})

// const Inbox = React.lazy(() => {
//   return import('./containers/Inbox/Inbox')
// })

// const Activity = React.lazy(() => {
//   return import('./containers/Activity/Activity')
// })

const App = () => {
  const userId = useSelector(state => state.userId)
  const isAuthenticated = useSelector(state => state.token !== null)

  const dispatch = useDispatch()
  const onTryAutoSignIn = useCallback(() => dispatch(actions.authUserCheckState()), [dispatch])
  const onAuthUserFetch = useCallback(userId => dispatch(actions.authUserFetch(userId)), [dispatch])

  useEffect(() => {
    onTryAutoSignIn()
  }, [onTryAutoSignIn])

  useEffect(() => {
    if (userId) {
      onAuthUserFetch(userId)
    }
  }, [onAuthUserFetch, userId])

  let routes = (
    <Switch>
      <Route path="/auth" component={props => <Auth {...props} />} />
      <Route path="/" exact component={props => <Home {...props} />} />
      <Redirect to="/" />
    </Switch>
  )
  if (isAuthenticated) {
    routes = (
      <Switch>
        {/* <Route path="/inbox" component={props => <Inbox {...props} />} /> */}
        {/* <Route path="/explore" component={props => <Explore {...props} />} /> */}
        {/* <Route path="/activity" component={props => <Likes {...props} />} /> */}
        <Route path="/picture" component={props => <Picture {...props} />} />
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
  )
}

export default withRouter(App);
