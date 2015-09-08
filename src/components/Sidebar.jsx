import React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar">
          <li className="sidebar-main">
            <a ng-click="toggleSidebar()">
              Dashboard
              <span className="menu-icon glyphicon glyphicon-transfer"></span>
            </a>
          </li>
          <li className="sidebar-title"><span>NAVIGATION</span></li>
          <li className="sidebar-list">
            <Link to="dashboard">Dashboard <span className="menu-icon fa fa-tachometer"></span></Link>
          </li>
          <li className="sidebar-list">
            <Link to="tables">Tables <span className="menu-icon fa fa-table"></span></Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <div className="col-xs-4">
            <a href="https://github.com/4front/rdash-react" target="_blank">
              Github
            </a>
          </div>
          <div className="col-xs-4">
            <a href="https://github.com/4front/rdash-react/README.md" target="_blank">
              About
            </a>
          </div>
          <div className="col-xs-4">
            <a href="#">
              Support
            </a>
          </div>
        </div>
      </div>
    );
  }
}
