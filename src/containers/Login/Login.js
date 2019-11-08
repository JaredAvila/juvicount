import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
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
      <div>
        <h1>Juvicount</h1>
        <div>
          <h4>Sign In</h4>
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
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
