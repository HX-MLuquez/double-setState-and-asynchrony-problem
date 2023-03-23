import React, { Component } from "react";

export default class FormD extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  validateUser = (user) => {
    console.log("in");
    if (user.name === "username") {
      if (user.value !== "Jimy") {
        console.log("in");
        this.setState({
          ...this.state,
          error: "el usuario tiene que ser distinto a Jimy",
        });
      } else {
        this.setState({
          ...this.state,
          error: "",
        });
      }
    }
  };

  handleInput = (event) => {
    this.setState(
      (s) => {
        return { ...this.state, [event.target?.name]: event.target?.value };
      },
      () => this.validateUser(event.target)
    );
  };

  handleSumbit = (e) => {
    e.preventDefauly();
  };
  render() {
    console.log("state ", this.state);
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          name="username"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleInput}
        />

        <input
          name="password"
          value={this.state.password}
          placeholder="password"
          type="password"
          onChange={this.handleInput}
        />
        {this.state.error.length > 0 ? null : (
          <button type="submit">
            Submit
          </button>
        )}
      </form>
    );
  }
}
