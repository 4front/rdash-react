import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';
import request from '../lib/request';
import globalState from '../lib/global-state';

export default class MainLayout extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="page-wrapper" className="open">
        <Sidebar/>
        <div id="content-wrapper">
          <div className="page-content">
            <HeaderBar/>
          </div>
          <div>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
}
