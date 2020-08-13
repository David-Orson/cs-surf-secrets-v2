import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { deletePost } from "../../redux/actions/dataActions";

class DeletePost extends Component<any, any> {
  deletePost = () => {
    this.props.deletePost(this.props.postId);
    this.setState({ open: false });
  };
  render() {
    return (
      <Fragment>
        <button className="button-small-red" onClick={this.deletePost}>
          DELETE
        </button>
      </Fragment>
    );
  }
}

export default connect(null, { deletePost })(DeletePost);
