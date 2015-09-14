import React from 'react';

export default class Dropdown extends React.Component {
  constructor() {
    super();

    this._clickOut = this.clickOut.bind(this);
    this.state = {
      open: false
    };
  }

  componentWillMount() {
    // Need to use window here, not document. For some reason the stopPropagation
    // isn't reventing the clickOut event on document.
    window.addEventListener('click', this._clickOut, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._clickOut, false);
  }

  toggle(event) {
    this.setState({
      open: !this.state.open
    });

    event.stopPropagation();
  }

  clickOut(event) {
    // Clicking out has no effect if the dropdown isn't open
    if (this.state.open === false)
      return;

    // If the clicked element is contained within the dropdown,
    // don't close the dropdown.
    // if (this.refs.dropdown.getDOMNode().contains(event.target)) {
    //   return;
    // }

    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div className="item dropdown">
        <a href="#" ref="target" className="dropdown-toggle" onClick={this.toggle.bind(this)}>
          {this.props.target}
        </a>
        <ul ref="dropdown" className="dropdown-menu dropdown-menu-right"
          style={{display: this.state.open ? 'block' : 'none'}}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  target: React.PropTypes.element.isRequired
}
