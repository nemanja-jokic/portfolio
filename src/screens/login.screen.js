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
    const style = !!this.props.modal ? "modal" : "";
    return (
      <div className={`login-screen ${style}`}>
        {!!this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="login-screen-form red">
          <div>HELLO</div>
          <div> tultip-name</div>
          <div> tultip-email</div>
          <div> tultip-paswword</div>
          <div> tultip-confirm-pasword</div>
          <div>
            maybe we can make here some check if somebody is robot(whith couple
            of pics to choose right)
          </div>
          <div onClick={this.props.submit}>SUBMIT</div>
        </div>
      </div>
    );
  }
}
export default LoginScreen;
