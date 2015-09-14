import React from 'react';
import {Link} from 'react-router';
import Loading from './Loading';

export default class SummaryWidget extends React.Component {
  constructor() {
    super();
  }

  renderLoading() {
    if (this.props.loading !== true)
      return null;

    return <Loading/>;
  }

  renderContents() {
    if (this.props.loading === true)
      return null;

    return (
      <div className="widget-content">
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div className="widget">
        <div className="widget-body">
          {this.renderLoading()}
          {this.renderContents()}
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
