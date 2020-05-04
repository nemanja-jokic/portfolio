import React from "react";

export default function Frame({ content, data }) {
  console.log(data);
  return <div className="frame">{content}</div>;
}
