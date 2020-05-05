import React from "react";
import img from "../image/location.png";

export default function Frame({ content, data, type, nav }) {
  console.log(data);
  return (
    <div className="frame">
      {type === "WEATHER" ? (
        <div>
          {" "}
          {!!data.name ? (
            <div>
              <div>NAME :{data.name}</div>
              <div>TEMP :{(data.temp - 273.15).toFixed(1)}</div>
              <div>FEELS_LIKE : {(data.feels_like - 273.25).toFixed(1)}</div>
              <div> {content}</div>
              <div>DESCRIPTION : {data.description}</div>
            </div>
          ) : (
            <div>
              <img className="location-img" src={img} alt="allow location" />
            </div>
          )}
        </div>
      ) : type === "CALCULATOR" ? (
        <div>CALCULATOR</div>
      ) : (
        <div>TODO_LIST</div>
      )}
      <div className="like-place">HERE ARE PLACE FOR LIKE</div>
    </div>
  );
}
