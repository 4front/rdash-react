import React from 'react';
import Loading from './Loading';

export default class TableWidget extends React.Component {
  constructor() {
    super();
  }

  renderLoading() {
    if (this.props.loading !== true)
      return null;

    return <Loading/>;
  }

  renderContents() {
    if (this.props.loading === true)
      return null;

    return (
      <div className="table-responsive">
        <table className="table">
          {this.renderHeaders()}
          {this.renderTableBody()}
        </table>
      </div>
    );
  }

  renderHeaders() {
    if (this.props.showHeaders !== true)
      return null;

    var headers = this.props.headers.map((header) => {
      return <th>{header}</th>;
    });

    return (
      <thead>
        <tr>{headers}</tr>
      </thead>
    );
  }

  renderTableBody() {
    return (
      <tbody>
        {
          this.props.data.map((row) => {
            console.log("render row ", row[0])
            return (
              <tr key={row[0]}>
                {
                  row.map((value) => {
                    return <td>{value}</td>;
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    );
  }

  render() {
    return (
      <div className="widget">
        <div className="widget-header">
          {this.props.headerLeft}
          <div className="pull-right">
            {this.props.headerRight}
          </div>
        </div>
        <div className="widget-body medium no-padding">
          {this.renderLoading()}
          {this.renderContents()}
        </div>
      </div>
    );
  }
}

React.propTypes = {
  loading: React.PropTypes.bool,
  showHeaders: React.PropTypes.bool,
  headerLeft: React.PropTypes.element,
  headerRight: React.PropTypes.element,
  headers: React.PropTypes.array,
  data: React.PropTypes.array
}

React.defaultProps = {
  loading: false,
  showHeaders: true
};
