import React from "react";
import dayjs from "dayjs";
import { Link } from "@reach/router";

const StaticProfile = (props: any) => {
  const {
    profile: { handle, createdAt, imageUrl, bio, steam, location },
  } = props;

  return (
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
        <div className="user-details">
          <div className="bio-details">
            <h3>Bio</h3>
            {bio && <p>{bio}</p>}
          </div>
          {steam && <button className="button">STEAM</button>}
        </div>
      </div>
      <div className="profile-details">
        <div></div>
      </div>
    </div>
  );
};

export default StaticProfile;
