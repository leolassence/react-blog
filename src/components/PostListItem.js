import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => {
  const { post } = props;

  function deletePost(post) {
    props.deletePostCallBack(post);
  }

  return (
    <tr>
      <td>
        <Link to={`/post/${post.id}`}>
          {post.title}
        </Link>
      </td>
      <td>
        <button
          onClick={() => deletePost(post)}
          className='btn btn-danger'>
          Delete Post
        </button>
      </td>
    </tr>
  );
}

export default PostListItem;
