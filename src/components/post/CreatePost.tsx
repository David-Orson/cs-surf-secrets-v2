import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { createPost, clearErrors } from "../../redux/actions/dataActions";

interface State {
  open: any;
  body: any;
  errors: any;
}

class CreatePost extends Component<any, any> {
  state: State = {
    open: false,
    body: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "", open: false, errors: {} });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.createPost({ body: this.state.body });
  };

  render() {
    const falseOpen = {
      display: "none",
    };

    const trueOpen = {
      display: "block",
    };
    const { errors } = this.state;
    const {
      UI: { loading },
    } = this.props;
    return (
      <Fragment>
        <button className="button" onClick={this.handleOpen}>
          CREATE POST
        </button>
        <div style={this.state.open ? trueOpen : falseOpen}>
          <button className="button--red" onClick={this.handleClose}>
            CANCEL
          </button>
          <form noValidate className="signup-form" onSubmit={this.handleSubmit}>
            <div>
              <h4>Create a new post</h4>
              <label>Post Content</label>
              <input
                className="input"
                id="body"
                name="body"
                type="text"
                value={this.state.body}
                onChange={this.handleChange}
              />
              {errors.body && <p>{errors.body}</p>}
            </div>
            <button className="button" type="submit">
              POST
            </button>
            {loading && <p>Loading...</p>}
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { createPost, clearErrors })(
  CreatePost
);
