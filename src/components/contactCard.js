import React, { Component } from "react";

export default class ContactCard extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-left">
          <div className="card-image"></div>
          <div className="card-info">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="card-wrapper-right"></div>
      </div>
    );
  }
}
