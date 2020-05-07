import React from "react";
import Button from "./button.js";

// export default function Modal({ removeModal }) {
export default class Modal extends React.Component {
  render() {
    return (
      <div id="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>GREETINGS</h3>
            <Button id="close" onClick={this.props.removeModal} />
          </div>
          <div className="modal-body">
            <p>Ovo je nas modal</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo
              eum nisi minima fugit, dignissimos soluta blanditiis eligendi non
              obcaecati, a labore quas quisquam dolorum omnis natus consequuntur
              expedita quaerat rem quos quae temporibus. Nesciunt tempore
              repellat dicta, saepe obcaecati beatae accusamus facilis
              asperiores officia magnam perferendis quo magni quasi?
            </p>
          </div>
          <div className="modal-footer">
            <p>Ovo je footer modala</p>
          </div>
        </div>
      </div>
    );
  }
}
