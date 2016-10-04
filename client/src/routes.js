import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import NewPost from './components/ui/NewPost';
import PostList from './components/ui/PostList';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path="/write" component={NewPost} />
    </Route>
  </Router>
);