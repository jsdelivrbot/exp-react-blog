import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of Posts</div>
    );
  }
}

// this allow me to use fetchPosts in the props of this component
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect (null, mapDispatchToProps)(PostsIndex);*/

// SHORTCUT
// export default connect (null, { fetchPosts: fetchPosts })(PostsIndex);
// line 26 using ES6:
export default connect (null, { fetchPosts })(PostsIndex);
