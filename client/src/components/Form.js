import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  error({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  input = ({ input, label, meta }) => {
    const classForInput = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={classForInput}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmitForm = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmitForm)}
        className="ui form error"
      >
        <Field name="title" component={this.input} label="Enter Title" />
        <Field
          name="description"
          component={this.input}
          label="Enter Description"
        />
        <button type="submit" className="ui button secondary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};

  if (!formValues.title) {
    error.title = 'No Title';
  }
  if (!formValues.description) {
    error.description = 'No description';
  }

  return error;
};

export default reduxForm({
  form: 'Create',
  validate,
})(Form);
