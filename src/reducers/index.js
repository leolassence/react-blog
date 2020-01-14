import { combineReducers } from 'redux';

import ReducerPosts from './reducerPosts';
import ReducerActivePost from './reducerActivePost';
import { reducer as ReducerForm } from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  activePost: ReducerActivePost,
  form: ReducerForm
});

export default rootReducer;
