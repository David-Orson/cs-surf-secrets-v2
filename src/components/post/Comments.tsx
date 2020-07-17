import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";

export class Comments extends Component<any, any> {
  render() {
    const { comments } = this.props;

    return (
      <div>
        {comments.map((comment: any) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <div className="post-user">
                <img
                  className="post-user-image"
                  height="40px"
                  width="40px"
                  src={`${userImage}`}
                  alt={`${userHandle} Profile`}
                />
              </div>
              <Link className="user-link" to={`/users/${userHandle}`}>
                {userHandle}
              </Link>
              <div>
                <p className="caption">
                  {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                </p>

                <p className="post-body">{body}</p>
                <hr />
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default Comments;
