import React from 'react';
import globalState from '../lib/global-state'

export default class HeaderBar extends React.Component {
  constructor() {
    super();

    this.state = {
      userDropDownOpen: false
    };
  }

  toggleUserDropdown() {
    this.setState({
      userDropDownOpen: !this.state.userDropDownOpen
    });
  }

  render() {
    return (
      <div className="row header">
        <div className="col-xs-12">
          <div className="user pull-right">
            <div className="item dropdown">
              <a href="#" className="dropdown-toggle"
                onClick={this.toggleUserDropdown.bind(this)}>
                <img src="img/avatar.jpg"/>
              </a>
              <ul className="dropdown-menu dropdown-menu-right"
                style={{display: this.state.userDropDownOpen ? 'block' : 'none'}}>
                <li className="dropdown-header">
                  {globalState.user.username}
                </li>
                <li className="divider"></li>
                <li className="link">
                  <a href="#">
                    Profile
                  </a>
                </li>
                <li className="link">
                  <a href="#">
                    Menu Item
                  </a>
                </li>
                <li className="link">
                  <a href="#">
                    Menu Item
                  </a>
                </li>
                <li className="divider"></li>
                <li className="link">
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
            <div className="item dropdown">
             <a href="#" className="dropdown-toggle">
                <i className="fa fa-bell-o"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-header">
                  Notifications
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">Server Down!</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="meta">
            <div className="page">
              Dashboard
            </div>
            <div className="breadcrumb-links">
              Home / Dashboard
            </div>
          </div>
        </div>
      </div>
    );
  }
}
