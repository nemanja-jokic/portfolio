import React from "react";

export default function Button({ id, tone, input }) {
  return (
    <div onClick={input} id={id} className={tone}>
      {id}
    </div>
  );
}
