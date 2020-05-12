import React, { Component } from "react";

export default class ContactCard extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-left">
          <div className="card-wrapper-left-image">IMAGE</div>
          <div className="card-wrapper-left-social-info">
            <p> Nemanja Jokić</p>
            <p>Junior Front End Developer</p>
            <p>Belgrade, Centralna Srbija, Serbia</p>

            <div>
              <a href="#">
                {/* target="_blank" */}
                <i className="linkendin">li </i>--
              </a>
              <a href="#">
                <i className="facebook"> face </i>--
              </a>
              <a href="#">
                <i className="github"> git </i>--
              </a>
              <a href="#">
                <i className="oykos"> js</i>
              </a>
            </div>
          </div>
        </div>
        <div className="card-wrapper-right">INFO</div>
      </div>
    );
  }
}
