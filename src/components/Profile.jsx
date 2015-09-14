import React from 'react';
import requireAuth from '../lib/require-auth';

export default requireAuth(class Profile extends React.Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
      </div>
    );
  }
});
