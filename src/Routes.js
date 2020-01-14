import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import PostList from './containers/PostList';
import PostForm from './containers/PostForm';
import Post from './containers/Post';
import NotFound from './components/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route path='/create-post' component={PostForm} />
          <Route path='/post/:id' component={Post} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


export default Routes;
