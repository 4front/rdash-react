import React from 'react';
import Alert from './Alert';
import superagent from 'superagent';
import agentPromise from 'superagent-promise';
import globalState from '../lib/global-state';

const request = agentPromise(superagent, Promise);

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  submit(event) {
    this.setState({
      loggingIn: true
    });

    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    // I don't get this line? How does the router get set to this.context?
    var { router } = this.context;

    event.preventDefault();

    request.post('/auth')
      .type('form')
      .send({
        username: username,
        password: password
      })
      .then((res) => {
        // Assign the user to global state
        globalState.user = res.body;

        // Redirect to whatever URL the user was originally trying to access
        var nextPath = router.getCurrentQuery().nextPath;
        if (nextPath) {
          router.replaceWith(nextPath);
        } else {
          router.replaceWith('/');
        }
      })
      .catch((err) => {
        this.setState({
          loginError: err,
          loggingIn: false
        });
      });
  }

  renderLoginError() {
    if (!this.state.loginError)
      return null;

    return <Alert type="critical">{this.state.loginError}</Alert>;
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" style={{marginTop: 150}}>
              <h2>Portal Login</h2>
              {this.renderLoginError()}
              <form onSubmit={this.submit.bind(this)} noValidate>
                <div className="form-group">
                  <label className="sr-only" htmlFor="username">Username</label>
                  <input className="form-control" autoCapitalize={false}
                    ref="username" placeholder="Username" autoFocus/>
                </div>

                <div className="form-group">
                  <label className="sr-only" htmlFor="password">Password</label>
                  <input className="form-control" type="password"
                    ref="password" placeholder="Password"/>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit"
                    disabled={this.state.loggingIn}>{"Sign-In"}</button>

                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};
