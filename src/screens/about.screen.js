import React, { Component } from "react";
import Cv from "../image/cv.pdf";

export default class AboutScreen extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", paddingTop: "100px" }}>
          <a href={Cv}>Link to CV</a>
        </div>
      </div>
    );
  }
}
