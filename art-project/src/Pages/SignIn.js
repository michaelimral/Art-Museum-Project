import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <form >
          <div className="form-group">
            <label>
              Username:
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"/>
            </label>
          </div>
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
