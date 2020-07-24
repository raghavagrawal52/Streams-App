import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class List extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderUserAccess(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="ui right floated header">
          <Link
            to={`streams/edit/${stream.id}`}
            className="ui black basic button"
          >
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui black secondary button"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="ui segment" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <h3 className="ui left floated header">
            <Link to={`/streams/${stream.id}`} style={{ color: 'black' }}>
              {stream.title}
            </Link>
          </h3>
          {this.renderUserAccess(stream)}
          <div className="ui clearing divider"></div>
          <p>{stream.description}</p>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui black secondary button">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui middle aligned divided list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(List);
