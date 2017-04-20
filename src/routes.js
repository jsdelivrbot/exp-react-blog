import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// path="/" is the same as your-domain.com
export default (
  <Route path="/" component={App}>
    {/* IndexRoutes, they will show depending on the parent route! */}
    <IndexRoute component={PostsIndex} />
    {/* Routes, they will show the 'component' if you type their 'path' */}
    <Route path="posts/new" component={PostsNew} />
    {/* this will pass to PostsShow this.props.paramns.id*/}
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
