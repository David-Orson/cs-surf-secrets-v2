import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

import { connect } from "react-redux";

import logo from "../../Assets/images/fake-logo.png";

class MyHeader extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    const { authenticated } = this.props;
    return (
      <div className="header">
        <img className="logo" alt="Surf Secrets Logo" src={logo}></img>
        {authenticated ? (
          <Fragment></Fragment>
        ) : (
          <Fragment>
            <Link to="signup" className="button">
              SIGNUP
            </Link>
            <Link to="login" className="button">
              LOGIN
            </Link>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(MyHeader);
