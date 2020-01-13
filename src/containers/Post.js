import React from 'react';
import PropTypes from 'prop-types';

import { PostContent } from '../components/PostContent';

class Post extends React.Component {
  render() {
    return (
      <div>
        <PostContent />
      </div>
    );
  }
}

Post.propTypes = {};

export default Post;
