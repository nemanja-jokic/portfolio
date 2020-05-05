import React from "react";

export default function Frame({ content, data, type, nav }) {
  return (
    <div className="frame">
      {type === "WEATHER" ? (
        <div>
          {" "}
          <div>NAME :{data.name ? data.name : "PLEASE ENABLE GEOLOCATION"}</div>
          <div>
            TEMP :{" "}
            {data.temp
              ? (data.temp - 273.15).toFixed(1)
              : "PLEASE ENABLE GEOLOCATION"}
          </div>
          <div>FEELS_LIKE : {data.feels_like}</div>
          <div> {content}</div>
          <div>DESCRIPTION : {data.description}</div>
        </div>
      ) : (
        <div>CALCULATOR{nav}</div>
      )}
    </div>
  );
}
