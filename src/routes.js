import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

// path="/" is the same as your-domain.com
// IndexRoute will show depending on the parent route!
export default (  
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);
