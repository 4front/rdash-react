import React from 'react';
import requireAuth from '../lib/require-auth';

export default requireAuth(class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
});
