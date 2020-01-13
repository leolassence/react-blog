import { AT_POSTS } from '../actions/action-types';

export default function reducerPosts(state = [], action) {
  switch (action.type) {
    case AT_POSTS.READ_ALL: {
      return action.payload;
    }
    case AT_POSTS.READ: {
      return {
        ...state
      }
    }
    case AT_POSTS.READ_DELETE: {
      return {
        ...state
      }
    }
    case AT_POSTS.READ_CREATE: {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}
