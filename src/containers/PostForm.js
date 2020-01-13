import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form>
          <div className='form-group'>
            <label>Titre</label>
            <input className='form-control' type='text' />
            <div></div>
          </div>
          <div className='form-group'>
            <label>Content</label>
            <input className='form-control' type='textarea' />
            <div></div>
          </div>
          <div className='form-group'>
            <label>Author</label>
            <input className='form-control' type='text' />
            <div></div>
          </div>
          <Link to={'/'} className='button-space'>
            <button className='btn btn-danger'>Retour</button>
          </Link>
          <button className='btn btn-primary'>Create</button>
        </form>
      </div>
    );
  }
}


export default PostForm;
