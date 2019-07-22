import React, { Suspense } from 'react';
import {
  Router, Route, Switch, Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageLoader from '@components/common/PageLoader';
import Notification from '@containers/common/Notification';
import store from './store';

const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedInUser = store.getState().auth.loggedInUser;
  return (
    <Route
      {...rest}
      render={props => (typeof loggedInUser !== 'undefined'
        && loggedInUser !== null
        && loggedInUser !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ))
      }
    />
  );
};

const Login = React.lazy(() => import('@containers/Login'));
const Signup = React.lazy(() => import('@containers/Signup'));
const Timeline = React.lazy(() => import('@components/Timeline'));
const Tweet = React.lazy(() => import('@containers/ActiveTweet'));

export default (
  <Suspense fallback={<PageLoader />}>
    <Router history={history}>
      <div className="container-fluid p-0 fvh fvw">
        <Notification />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Signup} />
          <PrivateRoute exact path="/:username" component={Timeline} />
          <PrivateRoute exact path="/tweet/:id" component={Tweet} />
        </Switch>
      </div>
    </Router>
  </Suspense>
);
