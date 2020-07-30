import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { connect } from "react-redux";
import { markNotificationsRead } from "../../redux/actions/userActions";

class Notifications extends Component<any, any> {
  state = {
    open: false,
  };

  handleOpen = (e: any) => {
    this.setState({ open: true });
  };

  handleClose = (e: any) => {
    this.setState({ open: false });
    let unreadNotificationIds = this.props.notifications
      .filter((not: any) => !not.read)
      .map((not: any) => not.notificationId);
    console.log("here");
    console.log(this.props.notifications);
    this.props.markNotificationsRead(unreadNotificationIds);
  };
  onMenuOpened = () => {};

  render() {
    const notifications = this.props.notifications;

    dayjs.extend(relativeTime);

    console.log(notifications);

    /* if(notifications && notifications.length > 0){
      notifications.filter((not: any) => not.read === false) > 0 ? ()
    } */

    let notificationsMarkup =
      notifications && notifications.length > 0
        ? notifications.map((not: any) => {
            const verb = not.type === "like" ? "liked" : "commented on";
            const time = dayjs(not.createdAt).fromNow();

            const icon = not.type === "like" ? <p>LIKE</p> : <p>COMMENT</p>;

            return (
              <div>
                <Link
                  className="nav-link"
                  to={`users/${not.recipient}/post/${not.postId}`}
                >
                  <p>
                    {icon} {not.sender} {verb} your post {time}
                  </p>
                </Link>
              </div>
            );
          })
        : null;

    return (
      <Fragment>
        <div className="notifications">
          <button className="button" onClick={this.handleOpen}>
            {notifications.filter((not: any) => not.read === false).length}
          </button>
          {this.state.open ? (
            <button className="button--red" onClick={this.handleClose}>
              X
            </button>
          ) : null}
          <div className="notification-markup">
            {this.state.open ? notificationsMarkup : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  notifications: state.user.notifications,
});

export default connect(mapStateToProps, { markNotificationsRead })(
  Notifications
);
