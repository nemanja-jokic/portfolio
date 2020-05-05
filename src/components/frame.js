import React from "react";


export default function Frame({ content, data, type }) {

  var day = new Date().getDay();
  switch(day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  console.log(data)
  return (
    <div className="frame">
      {type === "WEATHER" ? (
        <div className='weather-wrapper'>
          <p className='city'>{data.name}, {data.country}</p>
          <p>{day}</p>
          <p className='capitalize'>{data.description}</p>
          <div className='weather-data'>
            <div className='img-temp'>
               {content}
              <p>{parseInt(data.temp - 273.15)} <sup>℃</sup> </p>
            </div>
            <div className='more-weather-details'>
              <p>Presure: {data.pressure}</p>
              <p>Feels Like : {parseInt(data.feels_like - 273.15)} <sup>℃</sup></p>
              <p>Humidity: {data.humidity}%</p>
              <p>Wind: {data.wind} km/h</p>
            </div>
          </div>
          
          

        </div>
      ) : (
        <div>CALCULATOR{nav}</div>
      )}
    </div>
  );
}
