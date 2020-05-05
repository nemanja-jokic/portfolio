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
        {/* <div onClick={this.redirecting} id="home" className="nav-bar-links">
          HOME
        </div>

        <div onClick={this.redirecting} id="about" className="nav-bar-links">
         ABOUT 
        </div>
        <div onClick={this.redirecting} id="contact" className="nav-bar-links">
          CONTACT 
        </div> */}
        <nav id="nav">
          <ul>
            <li>
              <a onClick={this.redirecting} id="home">
                HOME
              </a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          {/* <a href="#" id="respmenu" class="button"><i class="fa fa-lg fa-navicon"></i>&nbsp;&nbsp;&nbsp;&nbsp;Navigation</a> */}
        </nav>
      </div>
    );
  }
}
