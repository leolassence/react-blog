import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import history from '../history';

import { createPost } from '../actions';

const formConfig = {
  form: 'createPostForm'
};

class PostForm extends React.Component {
  createPost(post) {
    this.props.createPost(post);
    history.push('/');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          <div className='form-group'>
            <label htmlFor='title'>Titre</label>
            <Field
              name='title'
              component='input'
              className='form-control'
              type='text' />
          </div>
          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <Field
              name='content'
              component='textarea'
              className='form-control'
              type='textarea' />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <Field
              name='author'
              component='input'
              className='form-control'
              type='text' />
          </div>
          <Link to={'/'} className='button-space'>
            <button className='btn btn-danger'>Retour</button>
          </Link>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ createPost }, dispatch)
});


export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));
