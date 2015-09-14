import React from 'react';
import Loading from './Loading';
import request from '../lib/request';
import TableWidget from './TableWidget';
import {random} from '../lib/util';

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
        // Simulating some network latency
        window.setTimeout(() => {
          // Cache the raw users JSON in an instance variable for possible filtering
          this._users = res.body;

          this.setState({
            loading: false,
            users: this.formatUsers(this._users)
          });
        }, random(100, 600));
      });
  }

  formatUsers(users) {
    // Map each user JSON object to what should be rendered in the table cells.
    return users.map((user) => {
      return [user.id, user.name, user.role, user.account];
    });
  }

  userFilterChanged(event) {
    var filterText = event.target.value;

    console.log("filter users on ", filterText);

    // Filter the list of users to only those whose name contains
    // the search text.
    this.setState({
      users: this.formatUsers(this._users.filter((user) => {
        return user.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
      }))
    })
  }

  render() {
    var tableProps = {
      headerLeft: [<i className="fa fa-users"/>, <span>Users</span>],
      headerRight: (
        <input type="text" placeholder="Search"
          className="form-control input-sm"
          onChange={this.userFilterChanged.bind(this)}/>
      ),
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
