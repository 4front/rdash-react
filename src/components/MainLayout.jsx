import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';
import request from '../lib/request';
import globalState from '../lib/global-state';
import dispatcher from '../lib/dispatcher';

export default class MainLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: true
    };
  }

  componentWillMount() {
    dispatcher.on('toggleSidebar', () => {
      this.setState({
        sidebarOpen: !this.state.sidebarOpen
      });
    });
  }

  render() {
    return (
      <div id="page-wrapper" className={this.state.sidebarOpen ? 'open' : null}>
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
