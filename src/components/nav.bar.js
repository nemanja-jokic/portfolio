import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./logoVeselaTipca.png";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }
  redirecting = (e) => {
    this.setState({});
  };
  render() {
    return (
      <div className="nav-bar">
        {/* <div className="logo">
          <Link to={"/home"}>
            <img style={{ width: "85px" }} src={Logo} alt="logo" />
          </Link>
        </div> */}

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
