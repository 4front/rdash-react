import React from 'react';

const ICON_CLASSES = {
  warning: ['text-warning', 'fa fa-flash'],
  critical: ['text-danger', 'fa fa-warning'],
  healthy: ['text-success', 'fa fa-check']
};

export default class StatusIcon extends React.Component {
  render() {
    return (
      <span className={ICON_CLASSES[this.props.status][0]}>
        <i className={ICON_CLASSES[this.props.status][1]}></i>
      </span>
    );
  }
}

React.propTypes = {
  status: React.PropTypes.oneOf(['warning', 'danger', 'healthy']).isRequired,
  message: React.PropTypes.string
};
