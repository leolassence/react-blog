import React from 'react';
// import PropTypes from 'prop-types';

import Post from './Post';

class PostList extends React.Component {
  render() {
    return (
      <div>
        <h1>Post List</h1>
        <Post />
      </div>
    );
  }
}

// PostList.propTypes = {};

export default PostList;
