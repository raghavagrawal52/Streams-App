import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui secondary button"
        >
          Delete
        </button>
        <Link to="/" className="ui secondary button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderTitle() {
    if (!this.props.stream) {
      return "Delete Stream";
    }
    return `Delete Stream ${this.props.stream.title}`;
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete the stream with title : ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title={this.renderTitle()}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
