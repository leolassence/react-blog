import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import history from '../history';

import { createPost } from '../actions';

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 10) {
    errors.title = 'Must be 10 characters or less'
  }

  if (!values.content) {
    errors.content = 'Required'
  } else if (values.content.length > 15) {
    errors.content = 'Must be 15 characters or less'
  }

  if (!values.author) {
    errors.author = 'Required'
  }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  let field = <input {...input} placeholder={label} type={type} className='form-control' />

  if (type === 'textarea') {
    field = <textarea cols='3' rows='5' {...input} placeholder={label} type={type} className='form-control' />
  }

  const spanError = touched && error ? <span>{error}</span> : '';

  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
      <label>{label}</label>
      {field}
      {spanError}
    </div>
  )
}

class PostForm extends React.Component {
  createPost(post) {
    this.props.createPost(post);
    history.push('/');
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          <Field name='title' type='text' component={renderField} label='Title'/>
          <Field name='content' type='textarea' component={renderField} label='Content'/>
          <Field name='author' type='text' component={renderField} label='Author'/>
          <button
            disabled={toString(submitting)}
            className='btn btn-primary'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ createPost }, dispatch)
});

const formConfig = {
  form: 'createPostForm',
  validate
};

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));
