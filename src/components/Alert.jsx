import React from 'react';

export default class Alert extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.type}`}>
        {this.props.children}
      </div>
    );
  }
}

Alert.propTypes = {
  type: React.PropTypes.oneOf(['warning', 'danger', 'info'])
};

Alert.defaultProps = {
  type: 'info'
};
