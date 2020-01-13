import axios from 'axios';
import { AT_POSTS } from './action-types';

const ENDPOINT = 'http://localhost:3000';

function readAllPost() {
  return async function(dispatch) {
    const res = await axios.get(`${ENDPOINT}/posts`);

    dispatch({
      type: AT_POSTS.READ_ALL,
      payload: res.data
    });
  }
}

function readPost(id) {
  return async function(dispatch) {
    const res = await axios.get(`${ENDPOINT}/posts/${id}`);

    dispatch({
      type: AT_POSTS.READ,
      payload: res.data
    });
  }
}

function deletePost(id) {
  return async function(dispatch) {
    const res = await axios.delete(`${ENDPOINT}/posts/${id}`);

    dispatch({
      type: AT_POSTS.DELETE,
      payload: id
    });
  }
}

function createPost(post) {
  return async function(dispatch) {
    const res = await axios.post(`${ENDPOINT}/posts`, {
      title: post.title,
      content: post.content,
      author: post.author
    });

    dispatch({
      type: AT_POSTS.CREATE,
      payload: res.data
    });
  }
}

export {
  readAllPost,
  readPost,
  deletePost,
  createPost
};
