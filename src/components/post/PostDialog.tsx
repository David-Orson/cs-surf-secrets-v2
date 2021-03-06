import React, { Component, Fragment } from "react";
import dayjs from "dayjs";
import { Link } from "@reach/router";
import LikeButton from "./LikeButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import { connect } from "react-redux";
import { getPost, clearErrors } from "../../redux/actions/dataActions";

class PostDialog extends Component<any, any> {
  state = {
    open: false,
    oldPath: "",
    newPath: "",
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, postId } = this.props;
    const newPath = `/users/${userHandle}/post/${postId}`;

    if (oldPath === newPath) oldPath = `/users/${userHandle}`;

    window.history.pushState(null, "Surf Secrets Post", newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getPost(this.props.postId);
  };

  handleClose = () => {
    window.history.pushState(null, "Surf Secrets", this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  closer = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      post: {
        postId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments,
      },
      UI: { loading },
      authenticated,
    } = this.props;

    const falseOpen = {
      display: "none",
    };

    const trueOpen = {
      display: "block",
    };

    const dialogMarkup = loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        {authenticated ? null : (
          <button className="button-small-red right" onClick={this.handleClose}>
            X
          </button>
        )}
        <CommentForm postId={postId} closer={this.closer} />
        <Comments comments={comments} />
      </div>
    );

    console.log(commentCount);

    const conditionalOpener = authenticated ? (
      this.props.commentsExist ? (
        <button className="button-small" onClick={this.handleOpen}>
          view
        </button>
      ) : (
        <button className="button-small" onClick={this.handleOpen}>
          . . .
        </button>
      )
    ) : this.props.commentsExist ? (
      <button className="button-small" onClick={this.handleOpen}>
        OPEN
      </button>
    ) : (
      <div className="spacer"></div>
    );

    return (
      <Fragment>
        {conditionalOpener}
        {this.state.open ? (
          <div className="post" style={this.state.open ? trueOpen : falseOpen}>
            {dialogMarkup}
          </div>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  post: state.data.post,
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getPost, clearErrors })(PostDialog);
