import React, { Component } from "react";
import Button from "./button.js";
import "./calculator.scss";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    };
  }
  input = (e) => {
    console.log(this.state.result, e.target.id);
    if (this.state.result === "0") {
      this.setState({ result: e.target.id });
    }
    if (e.target.id === "C") {
      this.setState({
        result: this.state.result.slice(0, this.state.result.length - 1),
      });
    } else if (e.target.id === "DEL") {
      this.setState({ result: "0" });
    } else {
      this.setState({ result: [...this.state.result, e.target.id] });
    }
  };

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operations = "x/+-".split("");
    const command = "C,DEL,=".split(",");
    return (
      <div className="calculator">
        <div className="calculator-display">{this.state.result}</div>
        <div className="calculator-command">
          {command.map((com) => (
            <Button input={this.input} id={com} tone={"button"} />
          ))}
        </div>
        <div className="calculator-buttons">
          <div className="calculator-buttons-numbers">
            {numbers.map((number) => (
              <Button
                input={this.input}
                id={number}
                tone={number === 0 ? "zero" : "button"}
              />
            ))}
          </div>
          <div className="calculator-buttons-operations">
            {operations.map((operation) => (
              <Button tone={"button"} input={this.input} id={operation} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
