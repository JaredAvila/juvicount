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
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChangeHanlder}
            />
            <input className={styles.Btn} type="submit" value="Log In" />
          </form>
          <p>Already have an account?</p>
          <NavLink to={"/"}>SIGN IN</NavLink>
        </div>
      </div>
    );
  }
}

export default Register;
