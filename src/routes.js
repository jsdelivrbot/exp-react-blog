import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// path="/" is the same as your-domain.com
export default (
  <Route path="/" component={App}>
    {/* IndexRoutes, they will show depending on the parent route! */}
    <IndexRoute component={PostsIndex} />
    {/* Routes, they will show the 'component' if you type their 'path' */}
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
