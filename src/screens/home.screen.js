import React, { Component } from "react";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
    };
  }
  componentDidMount() {
    const { lat, lon } = this.props;
    console.log(lat);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a444aa745a6a69baa47f2380e6bf8ea`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        {/* <img src='http://openweathermap.org/img/w/" + weatherDataIn.weather[0].icon + ".png'/> */}
        HHHH
      </div>
    );
  }
}
