import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../components/button.js";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.passwordStrengthBar = React.createRef();
    this.state = {
      redirect: "",
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.passwordStrongBar();
  };
  passwordStrongBar = () => {
    if (!!this.state.password) {
      var paswordStrength = 0;

      if (this.state.password.length > 4) {
        paswordStrength += 1;
      }
      //PROVERAVA VELIKA SLOVA
      if (this.state.password.search(/[A-Z]/) !== -1) {
        paswordStrength += 1;
      }
      //PROVERAVA BROJEVE
      if (this.state.password.search(/[0-9]/) !== -1) {
        paswordStrength += 1;
      }
      //PROVERAVA SPECIJALNE KARAKTERE
      if (
        this.state.password.search(/[!|@|#|$|%|^|&|(|)|_|+|*|-|/|.|,|:|;]/) !==
        -1
      ) {
        paswordStrength += 1;
      }
      //PROVERAVA DUZINU OD PREKO 8 KARAKTERA
      if (this.state.password.length > 8) {
        paswordStrength += 1;
      }
      console.log(paswordStrength);
      const spanTraka = this.passwordStrengthBar.current;
      console.log(spanTraka);
      switch (paswordStrength) {
        case 0:
          spanTraka.style.width = 0 + "%";
          spanTraka.style.backgroundColor = "yellow";
          break;
        case 1:
          spanTraka.style.width = 20 + "%";
          //	ubacivanjeIzrazaZaSnagu(snagaSifre)
          break;
        case 2:
          spanTraka.style.width = 40 + "%";
          //	ubacivanjeIzrazaZaSnagu(snagaSifre)
          break;
        case 3:
          spanTraka.style.width = 60 + "%";
          spanTraka.style.backgroundColor = "green";
          //	ubacivanjeIzrazaZaSnagu(snagaSifre)
          break;
        case 4:
          spanTraka.style.width = 80 + "%";
          //ubacivanjeIzrazaZaSnagu(snagaSifre);
          break;
        case 5:
          spanTraka.style.width = 100 + "%";
          //ubacivanjeIzrazaZaSnagu(snagaSifre);
          break;
        default:
      }
    }
  };

  UserNameHandler = (userNameAlert, userNameAlertMessage) => {
    this.setState({
      userNameAlertMessage,
      userNameAlert,
    });
  };

  emailHandler = (emailAlert, emailAlertMessage) => {
    this.setState({
      emailAlertMessage,
      emailAlert,
    });
  };

  passwordHandler = (passwordAlert, passwordAlertMessage) => {
    this.setState({
      passwordAlertMessage,
      passwordAlert,
    });
  };
  paswordCheckHandler = (paswordCheckAlert, paswordCheckAlertMessage) => {
    this.setState({
      paswordCheckAlertMessage,
      paswordCheckAlert,
    });
  };
  checkInputs = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    const checkEmail = /^(([^<>()|[\]\\.,;:\s@"]+(\.[^<>()|[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

    const alert = "error";

    if (username === "") {
      this.UserNameHandler(alert, "Please, enter your name.");
    } else if (username.length < 4) {
      this.UserNameHandler(
        alert,
        "Username must be at least  5 character in length."
      );
    } else if (
      username.search(/[!|@|#|$|%|^|&| |'|"|`|(|)|<||||/|>|+|*|/|,|:|;]/) !== -1
    ) {
      this.UserNameHandler(alert, "Special characters not allowed.");
    } else if (username.length > 20) {
      this.UserNameHandler(alert, "Not allowed more then 20 characters.");
    } else {
      // this.success(username);
      this.UserNameHandler("success", "");

      //  this.props.submit();
      // a = true;
    }

    if (email === "") {
      this.emailHandler(alert, "Email can't be empty");
    } else if (!checkEmail) {
      this.emailHandler(alert, "Please ,enter right email");
    } else {
      this.emailHandler("success", "Email can't be empty");
    }

    if (password.length < 8) {
      this.passwordHandler(alert, "Password must be 8 characters at least");
    } else if (password.search(/[0-9]/) === -1) {
      this.passwordHandler(alert, "Password must have at least one number");
    } else if (password.search(/[A-Z]/) === -1) {
      this.passwordHandler(
        alert,
        "Password must have at least one capital letter"
      );
    } else if (
      password.search(/[!|@|#|$|%|^|&|(|)|_|+|*|-|/|.|,|:|;]/) === -1
    ) {
      this.passwordHandler(
        alert,
        "Password must have at least one special character"
      );
    } else if (password.search(/[(|)|.|-]/) !== -1) {
      this.passwordHandler(alert, "Password must not have (, ), . and -.");
    } else {
      this.passwordHandler("success", "");
    }
    if (password2 === "") {
      this.paswordCheckHandler(alert, "Please, enter your password");
    } else if (password !== password2) {
      this.passwordHandler(alert, "Password don't match");
    } else {
      this.passwordHandler("success", "");
    }
  };

  render() {
    const {
      userNameAlertMessage,
      emailAlertMessage,
      passwordAlertMessage,
      paswordCheckAlertMessage,
      userNameAlert,
      emailAlert,
      passwordAlert,
      paswordCheckAlert,
    } = this.state;

    return (
      <div id="login-container">
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="header">
          <h2>Create Account</h2>
          <Button
            tone="arrow-button"
            onClick={this.props.submit}
            id={"SKIP >>"}
          />
        </div>

        <form id="form" className="form">
          <div className={`${userNameAlert}  form-control`}>
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
            <small>{userNameAlertMessage}</small>
          </div>

          <div className={`${emailAlert} form-control`}>
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

            <small>{emailAlertMessage}</small>
          </div>

          <div className={`${passwordAlert} form-control`}>
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
              <div
                style={{ height: "100%" }}
                ref={this.passwordStrengthBar}
                id="password-strength-bar"
              ></div>
            </div>

            <small>{passwordAlertMessage}</small>
          </div>

          <div className={`${paswordCheckAlert} form-control`}>
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
            <small>{paswordCheckAlertMessage}</small>
          </div>

          {/* <input type="submit" value="Submit" onClick={this.props.submit} /> */}
          <input type="submit" value="Submit" onClick={this.checkInputs} />
        </form>
      </div>
    );
  }
}
export default LoginScreen;
