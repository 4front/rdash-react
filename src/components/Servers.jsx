import React from 'react';
import Loading from './Loading';
import request from '../lib/request';
import TableWidget from './TableWidget';
import StatusIcon from './StatusIcon';
import {random} from '../lib/util';

export default class Servers extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      servers: []
    };
  }

  componentWillMount() {
    request.get('/stubdata/servers.json')
      .then((res) => {
        // Simulating network latency
        setTimeout(() => {
          // Map each server JSON object to what should be rendered in the table cells.
          let servers = res.body.map((server) => {
            return [server.name, server.ip, <StatusIcon status={server.status}/>];
          });

          this.setState({
            loading: false,
            servers: servers
          });
        }, random(100, 600));
      });
  }

  render() {
    var tableProps = {
      headerLeft: [<i className="fa fa-tasks"/>, <span>Servers</span>],
      headerRight: <a href="#">Manage</a>,
      headers: ['Server', 'IP', 'Alert']
    }

    return (
      <TableWidget
        loading={this.state.loading}
        showHeaders={false}
        data={this.state.servers}
        {...tableProps}/>
    );
  }
}
