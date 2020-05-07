import React from "react";
import { Redirect, Link } from "react-router-dom";

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
        <div className="logo"></div>

        <nav id="nav">
          <ul>
            <li>
              <Link to={"/home"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
