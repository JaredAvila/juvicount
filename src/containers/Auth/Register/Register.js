import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import * as styles from "./Register.module.css";

class Register extends Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  onPasswordChangeHanlder = e => {
    this.setState({ password: e.target.value });
  };

  onFirstNameChangeHanlder = e => {
    this.setState({ firstName: e.target.value });
  };

  onLastNameChangeHanlder = e => {
    this.setState({ lastName: e.target.value });
  };

  onEmailChangeHanlder = e => {
    this.setState({ email: e.target.value });
  };

  onPassword2ChangeHanlder = e => {
    this.setState({ password2: e.target.value });
  };

  onUsernameChangeHanlder = e => {
    this.setState({ username: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(
      `Username: ${this.state.username} \n Password: ${this.state.password}`
    );
    //Submit to be authenticated
    this.setState({ username: "", password: "" });
    this.props.history.push("/wallet");
  };

  render() {
    return (
      <div className={styles.Register}>
        <div>
          <h4>Create an account</h4>
          <form onSubmit={this.onSubmitHandler}>
            <input
              type="text"
              placeholder="Username"
              onChange={this.onUsernameChangeHanlder}
              value={this.state.username}
            />
            <input
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.onFirstNameChangeHanlder}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.onLastNameChangeHanlder}
            />
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChangeHanlder}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChangeHanlder}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.onPassword2ChangeHanlder}
            />
            <input className={styles.Btn} type="submit" value="Log In" />
          </form>
          <p className={styles.Accnt}>Already have an account?</p>
          <NavLink className={styles.Link} to={"/"}>
            SIGN IN
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Register;
