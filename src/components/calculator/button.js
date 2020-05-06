import React from "react";

export default function Button({ id, tone, input, sign }) {
  return (
    <div onClick={input} id={id} title={sign} className={tone}>
      {id}
    </div>
  );
}
