import React, { Component } from "react";
import Frame from "../components/frame.js";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
    };
  }
  componentDidMount() {
    const { lat, lon } = this.props;
    let weatherData = {};
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a444aa745a6a69baa47f2380e6bf8ea`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        weatherData.name = data.name;
        weatherData.temp = data.main.temp;
        weatherData.feels_like = data.main.feels_like;
        weatherData.pressure = data.main.pressure;
        weatherData.country = data.sys.country;
        this.setState({
          weatherIcon: data.weather[0].icon,
          weatherData: weatherData,
        });
      });
  }
  render() {
    return (
      <div>
        <Frame
          content={
            !!this.state.weatherIcon && (
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  this.state.weatherIcon +
                  ".png"
                }
                alt="weather-icon"
              />
            )
          }
          data={this.state.weatherData}
        />
        <Frame
          content={
            !!this.state.weatherIcon && (
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  this.state.weatherIcon +
                  ".png"
                }
                alt="weather-icon"
              />
            )
          }
          data={this.state.weatherData}
        />
      </div>
    );
  }
}
