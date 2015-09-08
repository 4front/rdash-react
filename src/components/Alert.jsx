import React from 'react';

export default class Alert extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.type}`}>
        <h2>Alert</h2>
      </div>
    );
  }
}

Alert.propTypes = {
  type: React.PropTypes.oneOf(['warning', 'critical', 'info'])
};

Alert.defaultProps = {
  type: 'info'
};
