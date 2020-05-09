import React from "react";

export default function Button({ id, tone, onClick, sign, alert }) {
  return (
    <div onClick={onClick} id={id} title={sign} className={tone}>
      {id}
      {!!alert && <div className="alert-message">{alert}</div>}
    </div>
  );
}
