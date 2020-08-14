import React, { Component } from "react";
import { Router, RouteComponentProps, Location } from "@reach/router";
import jwtDecode from "jwt-decode";
import axios from "axios";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";

import MyHeader from "./components/layout/MyHeader";
import MyNav from "./components/layout/MyNav";
import Footer from "./components/layout/MyFooter";

const Home = (props: RouteComponentProps) => <HomePage />;
const Profile = (props: RouteComponentProps) => <ProfilePage />;
const Signup = (props: RouteComponentProps) => <SignupPage />;
const Login = (props: RouteComponentProps) => <LoginPage />;
const User = (props: RouteComponentProps) => (
  <UserPage location={props.location} test="test" />
);

axios.defaults.baseURL =
  "https://europe-west1-cs-surf-secrets.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

const test = "test";

class App extends Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MyHeader />
          <MyNav />

          <Location>
            {({ location }) => (
              <Router>
                <Home path="/" />
                <Profile path="profile" />
                <Signup path="signup" />
                <Login path="login" />
                <User path="users/:handle" />
                <User path="users/:handle/post/:postId" />
              </Router>
            )}
          </Location>

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
