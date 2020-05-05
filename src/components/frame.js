import React from "react";

export default function Frame({ content, data, type }) {
  return (
    <div className="frame">
      {type === "WEATHER" ? (
        <div>
          {" "}
          <div>NAME :{data.name}</div>
          <div>TEMP : {data.temp}</div>
          <div>FEELS_LIKE : {data.feels_like}</div>
          <div> {content}</div>
        </div>
      ) : (
        <div>CALCULATOR</div>
      )}
    </div>
  );
}
