import React from "react";
import Button from "./button.js";

// export default function Modal({ removeModal }) {
export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-header">
              <div></div>
              <h3>GREETINGS</h3>
              <Button id="close" onClick={this.props.removeModal} />
            </div>
            <p>My name is Nemanja</p>
            <p>
              II’m an actor. I'm driving in a van with my fellow workers from
              school to school and performing puppet shows for children. I like
              that job. But a year ago my situation has changed and I was forced
              to stay almost all day at home. I was thinking: "What should I do
              from now on? Which job can enable me to work from home?" So coding
              was the first thing that came to my mind; but as I believed that
              only really smart people can do that, I was a little bit scared
              whether I'm smart enough. But I haven't had a choice. So I started
              leaning to code on the internet. Over time I found coding a really
              interesting field, where you can express your creativity as well.
              Now I'm really excited about what I've learned. I'm 100% sure that
              I'm the right guy for this job, but I understand that this is just
              the beginning. I want to show you what I've learned by now, in
              these few lines of code which you're about to see...
            </p>
            <div className="modal-footer">
              <p onClick={this.props.removeModal}>This is my presentation</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
