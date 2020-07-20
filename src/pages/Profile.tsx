import React, { Component } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";

import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";

import EditDetails from "../components/profile/EditDetails";
import AddTodoList from "../components/profile/AddTodoList";
import ProfileTodoList from "../components/profile/ProfileTodoList";
class Profile extends Component<any, any> {
  handleImageChange = (event: any) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleLogout = (e: any) => {
    this.props.logoutUser();
  };

  render() {
    const {
      user: {
        credentials: { handle, createdAt, imageUrl, bio, steam, location },
        loading,
        authenticated,
      },
    } = this.props;

    const todoData = [
      {
        record: "WR",
        map: "surf_nyx",
        zone: "Map",
        server: "KSF",
        todoId: 1,
      },
      {
        record: "Top10",
        map: "surf_mesa_fix",
        zone: "Map",
        server: "SH",
        todoId: 2,
      },
    ];

    let profileMarkup = !loading ? (
      authenticated ? (
        <div className="profile-container">
          <div className="profile">
            <div className="profile-image-container">
              <img
                className="user-image"
                height="100px"
                width="100px"
                src={`${imageUrl}`}
                alt="profile"
              />
              <p className="profile-link">{handle}</p>
            </div>
            {location && <p className="caption">{location}</p>}
            <p className="caption">
              Member Since {dayjs(createdAt).format("DD MMM YYYY")}
            </p>
            <input
              type="file"
              id="imageInput"
              onChange={this.handleImageChange}
              className="image-input"
            />

            <div className="user-details"></div>

            <div className="profile-details">
              <div className="bio-details">
                <h3>Bio</h3>
                {bio && <p>{bio}</p>}
              </div>

              {steam && <button className="button">STEAM</button>}
              <div>
                <AddTodoList />
                <ProfileTodoList data={todoData} />
              </div>
            </div>
            <button className="button--red" onClick={this.handleLogout}>
              LOGOUT
            </button>
            <EditDetails />
          </div>
        </div>
      ) : (
        <p className="text1">No profile found, please login</p>
      )
    ) : (
      <p>loading...</p>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapActionsToProps = {
  logoutUser,
  uploadImage,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
