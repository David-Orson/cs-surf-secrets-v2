import React, { Component } from "react";
import { Link } from "@reach/router";

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
class LoginPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="signup">
        <h4>LOGIN</h4>
        <form noValidate className="signup-form" onSubmit={this.handleSubmit}>
          <div className="entry">
            <label className="label">Email Address</label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <p className="errors">{errors.email}</p>}
          </div>
          <div className="entry">
            <label>Password</label>
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password && <p className="errors">{errors.password}</p>}
          </div>
          {errors.general && <p className="errors">{errors.general}</p>}
          <button className="button" type="submit">
            LOGIN
          </button>
          <br />
          <small>
            Don't have an account? sign up{" "}
            <Link className="text-link" to="/signup">
              Here
            </Link>
          </small>
        </form>
      </div>
    );
  }
}

/* LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
  UI: PropTypes.func.isRequired,
}; */

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
