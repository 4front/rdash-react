import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <div className="double-bounce1"/>
        <div className="double-bounce2"/>
      </div>
    );
  }
}
