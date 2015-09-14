import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Tables from './Tables';
import Profile from './Profile';
import MainLayout from './MainLayout';

import Router from 'react-router';
var { Route, RouteHandler, DefaultRoute } = Router;
import globalState from '../lib/global-state';

Object.assign(globalState, window.__4front__);

class Shell extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
}

var routes = (
  <Route path="/" handler={Shell}>
    <Route name="login" path="/login" handler={Login} />
    <Route handler={MainLayout}>
      <DefaultRoute name="dashboard" handler={Dashboard} />
      <Route name="tables" handler={Tables}/>
      <Route name="profile" handler={Profile}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
