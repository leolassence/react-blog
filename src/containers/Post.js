import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { readPost } from '../actions/';
import PostContent from '../components/PostContent';

class Post extends React.Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.readPost(this.props.match.params.id);
    }
  }

  renderPostContent() {
    const { post } = this.props;

    if (post) {
      return <PostContent post={post} />
    }
  }

  render() {
    return (
      <div>
        {this.renderPostContent()}
      </div>
    )
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

const mapStateToProps = state => {
  return {
    post: state.activePost
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readPost }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
