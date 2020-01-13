import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

import {
  readAllPost,
  deletePost
} from '../actions/';
import PostListItem from '../components/PostListItem';

class PostList extends React.Component {
  componentDidMount() {
    this.props.readAllPost();
  }

  renderPosts() {
    const { posts } = this.props;

    if (posts) {
      return posts.map(post => <PostListItem
        key={post.id}
        post={post}
        deletePostCallBack={(post) => this.deletePostCallBack(post)}
        />);
      }
    }

    deletePostCallBack(post) {
      this.props.deletePost(post.id);
    }

    render() {
      return (
        <div>
          <h1>Post List</h1>
          <div className='button-add'>
            <Link to={'/create-post'}>
              <button className='btn btn-primary btn-circle btn-lg'>+</button>
            </Link>
          </div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <ReactCSSTransitionGroup
              transitionName='fade'
              component='tbody'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {this.renderPosts()}
            </ReactCSSTransitionGroup>
          </table>
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
    ...bindActionCreators({
      readAllPost,
      deletePost
    }, dispatch)
  });

  export default connect(mapStateToProps, mapDispatchToProps)(PostList);
