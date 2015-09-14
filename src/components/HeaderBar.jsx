import React from 'react';
import globalState from '../lib/global-state'
import Dropdown from './Dropdown';
import {Link} from 'react-router';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="row header">
        <div className="col-xs-12">
          <div className="user pull-right">
            <Dropdown target={<img src="img/avatar.jpg"/>}>
              <li className="dropdown-header">
                {globalState.user.username}
              </li>
              <li className="divider"></li>
              <li className="link">
                <Link to="profile">Profile</Link>
              </li>
              <li className="divider"></li>
              <li className="link">
                <a href="/logout">Logout</a>
              </li>
            </Dropdown>

            <Dropdown target={<i className="fa fa-bell-o"></i>}>
              <li className="dropdown-header">Notifications</li>
              <li className="divider"></li>
              <li>
                <a href="#">Server Down!</a>
              </li>
            </Dropdown>
          </div>
          <div className="meta">
            <div className="page">Dashboard</div>
            <div className="breadcrumb-links">Home / Dashboard</div>
          </div>
        </div>
      </div>
    );
  }
}
