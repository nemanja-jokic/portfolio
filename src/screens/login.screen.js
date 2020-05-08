import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../Button.js";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      error: "error",
      success: "success",
      errorMessage: "",
      succesMessage: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  errorHandler = (error, errorMessage) => {
    this.setState({
      error,
      errorMessage,
    });
  };
  checkInputs = (e) => {
    e.preventDefault();
    const { username, email, password, password2, error, success } = this.state;

    if (username === "") {
      this.errorHandler(error, "Please, enter your name.");
    } else if (username.length < 4) {
      this.errorHandler(
        error,
        "Username must be at least  5 character in length."
      );
    } else if (
      username.search(/[!|@|#|$|%|^|&| |'|"|`|(|)|<||||/|>|+|*|/|,|:|;]/) !== -1
    ) {
      this.errorHandler(error, "Special characters not allowed.");
    } else if (username.length > 20) {
      this.errorHandler(error, "Not allowed more then 20 characters.");
    } else {
      // this.success(username);
      console.log("Bravoooo");
      //  this.props.submit();
      // a = true;
    }

    if (email === "") {
      this.setState({
        error: "error",
        // error: 'Email ne sme da bude prazan.'
      });
    }
    // else if(!proveriEmail(email)) {
    //     this.setState({
    //       error: 'error'
    //       // error: 'E mail nije validan.'
    //     })
    // }
    else {
      // uspesno(email);
    }

    if (password.length < 8) {
      this.setState({
        error: "error",
        // error: 'Password ne sme biti ispod 8 karaktera.'
      });
    } else if (password.search(/[0-9]/) === -1) {
      this.setState({
        error: "error",
        // error: 'Password mora imati bar jedan broj.'
      });
    } else if (password.search(/[A-Z]/) === -1) {
      this.setState({
        error: "error",
        // error: 'Password mora imati bar jedno veliko slovo.'
      });
    } else if (
      password.search(/[!|@|#|$|%|^|&|(|)|_|+|*|-|/|.|,|:|;]/) === -1
    ) {
      this.setState({
        error: "error",
        // error: 'Password mora imati bar jedan specijalan karakter.'
      });
    } else if (password.search(/[(|)|.|-]/) !== -1) {
      this.setState({
        error: "error",
        // error: 'Password ne sme imati (, ), . i -..'
      });
    } else {
      // uspesno(password);
    }
    if (password2 === "") {
      this.setState({
        error: "error",
        // error: 'Password dva ne sme biti prazan.'
      });
    } else if (password !== password2) {
      this.setState({
        error: "error",
        // error: 'Sifre se ne podudaraju.'
      });
    } else {
      // uspesno(password2);
    }
  };

  render() {
    const { error, success, errorMessage } = this.state;

    return (
      <div id="login-container">
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="header">
          <h2>
            Create Account <Button />{" "}
          </h2>
        </div>

        <form id="form" className="form">
          <div className={`${error} ${success} form-control`}>
            <label>Username</label>
            <input
              type="text"
              placeholder="danijel"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message 1</small>
          </div>

          <div className={`${error} ${success} form-control`}>
            <label>Email</label>
            <input
              type="email"
              placeholder="danijel@gmail.com"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>{errorMessage}</small>
          </div>

          <div className={`${error} ${success} form-control`}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <div className="pasword-strength">
              <div id="traka"></div>
            </div>
            <p id="text">Upozorenje! CAPS LOCK je ukljucen.</p>
            <small>Error message</small>
          </div>

          <div className={`${error} ${success} form-control`}>
            <label>Password check</label>
            <input
              type="password"
              placeholder="Password two"
              id="password2"
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}
            />
            <i className="fa fa-check-circle"></i>
            <i className="fa fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>

          {/* <input type="submit" value="Submit" onClick={this.props.submit} /> */}
          <input type="submit" value="Submit" onClick={this.checkInputs} />
        </form>
      </div>
    );
  }
}
export default LoginScreen;
