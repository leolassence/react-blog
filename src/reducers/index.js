import { combineReducers } from 'redux';

import ReducerPosts from './reducerPosts';
import ReducerActivePost from './reducerActivePost';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  activePost: ReducerActivePost
});

export default rootReducer;
