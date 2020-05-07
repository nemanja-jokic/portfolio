import React from "react";

export default function Button({ id, tone, onClick, sign }) {
  return (
    <div onClick={onClick} id={id} title={sign} className={tone}>
      {id}
    </div>
  );
}
