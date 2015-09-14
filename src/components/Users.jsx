import React from 'react';
import Loading from './Loading';
import request from '../lib/request';
import TableWidget from './TableWidget';

export default class Servers extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      users: []
    };
  }

  componentWillMount() {
    request.get('/stubdata/users.json')
      .then((res) => {
        // Map each user JSON object to what should be rendered in the table cells.
        let users = res.body.map((user) => {
          return [user.id, user.name, user.role, user.account];
        });

        this.setState({
          loading: false,
          users: users
        });
      });
  }

  render() {
    var tableProps = {
      headerLeft: [<i className="fa fa-users"/>, <span>Users</span>],
      headerRight: <input type="text" placeholder="Search" className="form-control input-sm"/>,
      headers: ['ID', 'Username', 'Role', 'Account']
    }

    return (
      <TableWidget
        loading={this.state.loading}
        showHeaders={true}
        data={this.state.users}
        {...tableProps}/>
    );
  }
}
