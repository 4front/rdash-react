import React from 'react';
import requireAuth from '../lib/require-auth';

export default requireAuth(class Tables extends React.Component {
  render() {
    return (
      <div>
        <h2>Tables</h2>
      </div>
    );
  }
});
