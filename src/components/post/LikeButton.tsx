import React, { Component } from "react";

import { connect } from "react-redux";
import { likePost, unlikePost } from "../../redux/actions/dataActions";

export class LikeButton extends Component<any, any> {
  likedPost = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like: any) => like.postId === this.props.postId
      )
    )
      return true;
    else return false;
  };
  likePost = () => {
    this.props.likePost(this.props.postId);
  };
  unlikePost = () => {
    this.props.unlikePost(this.props.postId);
  };
  render() {
    const { authenticated } = this.props.user;
    const LikeButton = !authenticated ? (
      <div></div>
    ) : this.likedPost() ? (
      <button className="button" onClick={this.unlikePost}>
        -
      </button>
    ) : (
      <button className="button" onClick={this.likePost}>
        +
      </button>
    );

    return LikeButton;
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapActionsToProps = {
  likePost,
  unlikePost,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
