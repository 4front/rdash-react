import React from 'react';
import {Link} from 'react-router';

export default class DashboardWidget extends React.Component {
  constructor() {
    super();
  }

  renderLoading() {
    if (this.props.loading !== true)
      return null;

    return (
      <div className="loading">
        <div className="double-bounce1"/>
        <div className="double-bounce2"/>
      </div>
    );
  }

  render() {
    return (
      <div className="widget">
        <div className="widget-body">
          {this.renderLoading()}
          <div className="widget-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

React.propTypes = {
  loading: React.PropTypes.bool
}

React.defaultProps = {
  loading: false
};
