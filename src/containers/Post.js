import React from 'react';
import PropTypes from 'prop-types';

import PostContent from '../components/PostContent';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>PostId: {this.props.match.params.id}</h1>
        <PostContent />
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default Post;
