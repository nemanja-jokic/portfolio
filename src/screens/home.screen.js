import React, { Component } from "react";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
    };
  }
  componentDidMount() {
    const { coords } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=4a444aa745a6a69baa47f2380e6bf8ea`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <div>hello HOME</div>
      </div>
    );
  }
}
