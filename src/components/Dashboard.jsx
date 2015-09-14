import React from 'react';
import Alert from './Alert';
import SummaryWidget from './SummaryWidget';
import Servers from './Servers';
import Users from './Users';
import requireAuth from '../lib/require-auth';

export default requireAuth(class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      metricsLoading: true,
      topLevelMetrics: {}
    };
  }

  componentWillMount() {
    // Simulate network latency making an API call to get top level
    // metrics.
    setTimeout(() => {
      this.setState({
        metricsLoading: false,
        topLevelMetrics: {
          users: 80,
          servers: 16,
          documents: 225,
          tickets: 62
        }
      });
    }, 1500);
  }

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

        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <SummaryWidget loading={this.state.metricsLoading}>
              <div className="widget-icon green pull-left">
                <i className="fa fa-users"/>
              </div>
              <div className="title">{this.state.topLevelMetrics.users}</div>
              <div className="comment">Users</div>
            </SummaryWidget>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <SummaryWidget loading={this.state.metricsLoading}>
              <div className="widget-icon red pull-left">
                <i className="fa fa-tasks"/>
              </div>
              <div className="title">{this.state.topLevelMetrics.servers}</div>
              <div className="comment">Servers</div>
            </SummaryWidget>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <SummaryWidget loading={this.state.metricsLoading}>
              <div className="widget-icon orange pull-left">
                <i className="fa fa-sitemap"/>
              </div>
              <div className="title">{this.state.topLevelMetrics.documents}</div>
              <div className="comment">Documents</div>
            </SummaryWidget>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <SummaryWidget loading={this.state.metricsLoading}>
              <div className="widget-icon blue pull-left">
                <i className="fa fa-support"/>
              </div>
              <div className="title">{this.state.topLevelMetrics.tickets}</div>
              <div className="comment">Tickets</div>
            </SummaryWidget>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Servers/>
          </div>
          <div className="col-lg-6">
            <Users/>
          </div>
        </div>
      </div>
    );
  }
});
