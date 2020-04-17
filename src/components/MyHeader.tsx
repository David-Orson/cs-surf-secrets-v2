import React, { Component } from "react";
import { Link } from "@reach/router";
import { fAuth } from "../config/fbConfig";

import logo from "../Assets/images/surfsecrets_logo.png";

class MyHeader extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fAuth.signOut();
  };

  render() {
    return (
      <div className="header">
        <img className="logo" alt="Surf Secrets Logo" src={logo}></img>
        <Link to="Signup" className="nav-link">
          SIGNUP
        </Link>
        <Link to="Login" className="nav-link">
          LOGIN
        </Link>
        <button className="button" onClick={this.handleSubmit}>
          LOGOUT
        </button>
      </div>
    );
  }
}

export default MyHeader;
