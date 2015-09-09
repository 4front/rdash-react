import React from 'react';
import Alert from './Alert';
import DashboardWidget from './DashboardWidget';
import requireAuth from '../lib/require-auth';

export default requireAuth(class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="row alerts-container">
          <div className="col-xs-12">
            <Alert type="success" dismissable={true}>
              <strong>Thanks for visiting! Feel free to create pull requests to improve the dashboard!</strong>
            </Alert>
            <Alert type="danger" dismissable={true}>
              <strong>Found a bug? Create an issue with as many details as you can.</strong>
            </Alert>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-xs-12">
          <DashboardWidget>
            <div className="widget-icon green pull-left">
              <i className="fa fa-users"/>
            </div>
            <div className="title">80</div>
            <div className="comment">Users</div>
          </DashboardWidget>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <DashboardWidget>
            <div className="widget-icon red pull-left">
              <i className="fa fa-tasks"/>
            </div>
            <div className="title">16</div>
            <div className="comment">Servers</div>
          </DashboardWidget>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <DashboardWidget>
            <div className="widget-icon orange pull-left">
              <i className="fa fa-sitemap"/>
            </div>
            <div className="title">225</div>
            <div className="comment">Documents</div>
          </DashboardWidget>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <DashboardWidget>
            <div className="widget-icon blue pull-left">
              <i className="fa fa-support"/>
            </div>
            <div className="title">62</div>
            <div className="comment">Tickets</div>
          </DashboardWidget>
        </div>
      </div>
    );
  }
});
