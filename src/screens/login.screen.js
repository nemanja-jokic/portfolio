import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }
  render() {
    return (
      <div id="login-container">
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="header">
          <h2>Create Account</h2>
        </div>

        <form id="form" className="form">
          <div className="form-control">
            <label for="username">Username</label>
            <input type="text" placeholder="danijel" id="username" />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message 1</small>
          </div>

          <div className="form-control">
            <label for="email">Email</label>
            <input type="email" placeholder="danijel@gmail.com" id="email" />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <div className="form-control">
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <div className="snaga-sifre">
              <div id="traka"></div>
            </div>
            <p id="text">Upozorenje! CAPS LOCK je ukljucen.</p>
            <small>Error message</small>
          </div>

          <div className="form-control">
            <label for="password2">Password check</label>
            <input type="text" placeholder="Password two" id="password2" />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          <input type="submit" value="Submit" onClick={this.props.submit} />
        </form>
      </div>
    );
  }
}
export default LoginScreen;
