import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PostList from './containers/PostList';
import PostForm from './containers/PostForm';
import NotFound from './components/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route path='/create-post' component={PostForm} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


export default Routes;
