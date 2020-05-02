import React from "react";

// export default function Modal({ removeModal }) {
export default class Modal extends React.Component {

  render() {

  
  return (
    
    // <div className="modal-wrapper" onClick={removeModal}>
    //   <h1>Something</h1>
    //   <p>Something about me...</p>
    // </div>

    <div id="modal" onClick={this.props.removeModal}>
      <div className="modal-content">
          <div className="modal-header">
              <h3>Ovo je header modala</h3>
              <p id="close" onClick={this.props.removeModal}>X</p>
          </div>
          <div className="modal-body">
              <p>Ovo je nas modal</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo eum nisi minima fugit, dignissimos soluta blanditiis eligendi non obcaecati, a labore quas quisquam dolorum omnis natus consequuntur expedita quaerat rem quos quae temporibus. Nesciunt tempore repellat dicta, saepe obcaecati beatae accusamus facilis asperiores officia magnam perferendis quo magni quasi?</p>
          </div>
          <div className="modal-footer">
              <p>Ovo je footer modala</p>
          </div>
      </div>
    </div> 
  
  

  );
}
}
