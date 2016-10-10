import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import NewPost from './components/ui/NewPost';
import PostList from './components/ui/PostList';
import ShowPost from './components/ui/ShowPost';
import Modify from './components/ui/Modify';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path="/posts/new" component={NewPost} />
      <Route path="/post/:id/edit" component={Modify} />
      <Route path="/post/:id" component={ShowPost} />
    </Route>
  </Router>
);
