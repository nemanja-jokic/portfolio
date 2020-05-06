import React, { Component } from "react";
import Button from "./button.js";
import "./calculator.scss";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      operationArray: [],
    };
  }

  input = (e) => {
    let last = `${this.state.result}`[`${this.state.result}`.length - 1].match(
      /[x]|[+]|[-]|[/]/
    );
    if (!!e.target.id.match(/[x]|[+]|[-]|[/]/)) {
      if (!last) {
        console.log("ok");
      }
    }
    if (e.target.id === "C" && this.state.result.length > 1) {
      this.setState({
        result: this.state.result.slice(0, this.state.result.length - 1),
      });
    } else if (e.target.id === "DEL") {
      this.setState({ result: "0" });
    } else if (this.state.result === "0") {
      this.setState({
        result:
          e.target.id === "C" || /[x]|[+]|[-]|[/]/.test(e.target.id)
            ? "0"
            : e.target.id,
      });
    } else {
      if (e.target.id === "C") {
        this.setState({
          result: "0",
        });
      } else {
        this.setState({
          result: [...this.state.result, e.target.id],
        });
      }
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
              <Button
                tone={"button"}
                sign={"operation"}
                input={this.input}
                id={operation}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
