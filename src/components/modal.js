import React from "react";

export default function Modal({ removeModal }) {
  return (
    <div className="modal-wrapper" onClick={removeModal}>
      <h1>Something</h1>
      <p>Something about me...</p>
    </div>
  );
}
