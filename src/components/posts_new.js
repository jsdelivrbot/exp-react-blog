import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title;
    // const categories = this.props.fields.categories;
    // const content = this.props.fields.content;
    // the lines above in ES6:
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    console.log(title);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <span className="text-help">{title.touched ? title.error : ''}</span>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <span className="text-help">{categories.touched ? categories.error : ''}</span>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <span className="text-help">{content.touched ? content.error : ''}</span>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: (mapStateToProps, mapDispatchToProps)
// reduxForm: (formConfig, mapStateToProps, mapDispatchToProps)
export default reduxForm({
  form: 'newPostForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
