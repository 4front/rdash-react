import React from 'react';
import globalState from './global-state';

// Function that wraps a component with an auth check
// that redirects to the login screen.
export default (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      console.debug("checking auth state");
      if (!globalState.user) {
        transition.redirect('login', {}, {nextPath: transition.path});
      }
    }

    render() {
      return <Component {...this.props}/>
    }
  };
};
