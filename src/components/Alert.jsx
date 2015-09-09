import React from 'react';

export default class Alert extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  dismiss(event) {
    this.setState({
      dismissed: true
    });
  }

  render() {
    if (this.state.dismissed === true)
      return null;

    return (
      <div className={`alert alert-${this.props.type}`}>
        {
          (() => {
            if (this.props.dismissable !== true)
              return null;

            return (
              <button type="button" className="close" onClick={this.dismiss.bind(this)}>
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            );
          })()
        }
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  dismissable: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['success', 'warning', 'danger', 'info'])
};

Alert.defaultProps = {
  dismissable: false,
  type: 'info'
};
