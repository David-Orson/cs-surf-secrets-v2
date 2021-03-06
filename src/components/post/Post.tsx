import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";
import { Link } from "@reach/router";

import { connect } from "react-redux";

class Post extends Component<any, any> {
  render() {
    dayjs.extend(relativeTime);
    const {
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        likeCount,
        commentCount,
        postId,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const commentsExist = commentCount;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeletePost postId={postId} />
      ) : null;

    return (
      <div className="post">
        <div className="post-user">
          <div className="post-left">
            <img
              className="post-user-image"
              height="50px"
              width="50px"
              src={`${userImage}`}
              alt={`${userHandle}`}
            />

            <div className="post-right">
              <Link className="user-link" to={`/users/${userHandle}`}>
                {userHandle}
              </Link>
              <p className="caption">{dayjs(createdAt).fromNow()}</p>
            </div>
          </div>

          {deleteButton}
        </div>

        <div className="post-main">
          <p className="post-body">{body}</p>
          <LikeButton postId={postId} />
          <span className="count">{likeCount} Likes </span>
          <span className="count">{commentCount} Comments</span>
        </div>
        <div className="dialog-container">
          <PostDialog
            postId={postId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
            commentsExist={commentsExist}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Post);
