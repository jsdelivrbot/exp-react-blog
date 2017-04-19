import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title;
    // const categories = this.props.fields.categories;
    // const content = this.props.fields.content;
    // the lines above in ES6:
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />

          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />

          <label>Content</label>
          <textarea className="form-control" {...content} />

          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

// connect: (mapStateToProps, mapDispatchToProps)
// reduxForm: (formConfig, mapStateToProps, mapDispatchToProps)
export default reduxForm({
  form: 'newPostForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
