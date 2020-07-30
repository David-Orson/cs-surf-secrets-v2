import React, { Component } from "react";

import { connect } from "react-redux";
import { submitComment } from "../../redux/actions/dataActions";

interface State {
  body: any;
  errors: any;
}

class CommentForm extends Component<any, any> {
  state: State = {
    body: "",
    errors: {},
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "" });
    }
  }

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.submitComment(this.props.postId, { body: this.state.body });
  };

  render() {
    const { authenticated } = this.props;
    const errors = this.state.errors;
    const commentFormMarkup = authenticated ? (
      <div>
        <form
          noValidate
          className="create-post-form"
          onSubmit={this.handleSubmit}
        >
          <div className="text--center">
            <label>Comment on Post</label>
            <textarea
              className="input input-post"
              id="body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            {errors.comment && <p>{errors.comment}</p>}
          </div>
          <div className="center">
            <button className="button" type="submit">
              COMMENT
            </button>
          </div>
        </form>
        <hr className="hr" />
      </div>
    ) : null;
    return commentFormMarkup;
  }
}

const mapStateToProps = (state: any) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
  errors: state.errors,
});

export default connect(mapStateToProps, { submitComment })(CommentForm);
