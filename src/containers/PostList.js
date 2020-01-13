import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readAllPost } from '../actions/';

class PostList extends React.Component {
  componentDidMount() {
    this.props.readAllPost();
  }

  render() {
    return (
      <div>
        <h1>Post List toto</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ readAllPost }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
