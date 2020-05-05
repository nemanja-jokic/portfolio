import React from "react";

export default function Frame({ content, data, type }) {
  return (
    <div className="frame">
      {type === "WEATHER" ? (
        <div>
          {" "}
          <div>NAME :{data.name}</div>
          <div>TEMP : {(data.temp - 32) / 1.8}</div>
          <div>FEELS_LIKE : {data.feels_like}</div>
          <div> {content}</div>
          <div>DESCRIPTION : {data.description}</div>
        </div>
      ) : (
        <div>CALCULATOR</div>
      )}
    </div>
  );
}
