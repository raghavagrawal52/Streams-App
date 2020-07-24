import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmitForm = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h2 style={{ marginBottom: '20px' }}>Create A Stream</h2>
        <StreamForm onSubmit={this.onSubmitForm} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
