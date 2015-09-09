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
    event.preventDefault();

    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    if (username.length === 0 || password.length === 0) {
      return this.setState({
        errorCode: 'missingUsernameOrPassword'
      });
    }

    this.setState({
      loggingIn: true,
      errorCode: null
    });

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
          errorCode: err.response.body.code,
          loggingIn: false
        });
      });
  }

  renderLoginError() {
    if (!this.state.errorCode)
      return null;

    var message = null;
    switch (this.state.errorCode) {
    case 'invalidCredentials':
      message = 'Invalid credentials';
      break;
    case 'missingUsernameOrPassword':
      message = 'Please enter your username and password';
      break;
    default:
      message = 'Unknown sign-in error';
      break;
    }

    return <Alert type="danger"><strong>{message}</strong></Alert>;
  }

  render() {
    var signInIconClass = (this.state.loggingIn) ?
      'fa-spinner fa-pulse' : 'fa-sign-in';

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" style={{marginTop: 150}}>
              <h2>Dashboard Login</h2>
              {this.renderLoginError()}
              <form onSubmit={this.submit.bind(this)} noValidate>
                <div className="form-group">
                  <label className="sr-only" htmlFor="username">Username</label>
                  <input className="form-control" autoCapitalize={false}
                    ref="username" placeholder="Username" autoFocus disabled={this.loggingIn}/>
                </div>

                <div className="form-group">
                  <label className="sr-only" htmlFor="password">Password</label>
                  <input className="form-control" type="password"
                    ref="password" placeholder="Password" disabled={this.loggingIn}/>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit"
                    disabled={this.state.loggingIn}>
                    <span>Sign-In</span>
                    <i style={{marginLeft: 10, fontSize: 16}} className={`fa ${signInIconClass}`}/>
                  </button>
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
