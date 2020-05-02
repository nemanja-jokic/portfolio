import React from "react";
import { Redirect } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }
  redirecting = (e) => {
    this.setState({
      redirect: `/${e.target.id}`,
    });
  };
  render() {
    return (
      <div className="nav-bar">
        {!!this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="logo">Logo</div>
        <div onClick={this.redirecting} id="home" className="nav-bar-links">
          HOME
        </div>

        <div onClick={this.redirecting} id="about" className="nav-bar-links">
         ABOUT 
        </div>
        <div onClick={this.redirecting} id="contact" className="nav-bar-links">
          CONTACT 
        </div>
      </div>
    );
  }
}
