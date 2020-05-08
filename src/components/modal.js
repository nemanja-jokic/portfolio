import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-header">
              <h2>GREETINGS</h2>
            </div>
            <p className="text">My name is Nemanja</p>
            <p className="text">
              I’m an actor. I'm driving in a van with my fellow workers from
              school to school and performing puppet shows for children. I like
              that job. But a year ago my situation has changed and I was forced
              to stay almost all day at home. I was thinking: "What should I do
              from now on? Which job can enable me to work from home?" So coding
              was the first thing that came to my mind; but as I believed that
              only really smart people can do that, I was a little bit scared
              whether I'm smart enough. But I really wanted to try. So I started
              leaning to code on the internet... Over time I found coding a
              really interesting field, where you can express your creativity as
              well. Now I'm really excited about what I've learned. I'm 100%
              sure that I'm the right guy for this job, but I understand that
              this is just the beginning. I want to show you just part of what
              I've learned by now, in these few lines of code which you're about
              to see...
            </p>
            <div className="modal-footer">
              <p
                onClick={this.props.removeModal}
                style={{ cursor: "pointer", margin: "0 auto 10px" }}
              >
                This is my presentation
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
