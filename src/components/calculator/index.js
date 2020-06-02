import React, { Component } from "react";
import Button from "../button.js";
import "./calculator.scss";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      // operationArray: [],
    };
  }

  input = (e) => {
    let last = `${this.state.result}`[`${this.state.result}`.length - 1].match(
      /[x+-/]/
    );
    if (this.state.calculator === false) {
      this.setState({
        result: e.target.i,
      });
    }
    if (e.target.id === "C" && this.state.result.length > 1) {
      this.setState({
        result: this.state.result.slice(0, this.state.result.length - 1),
      });
    } else if (e.target.id === "=") {
      if (!last) {
        let sum = `${this.state.result}`.match(/[x]/g)
          ? this.state.result.replace(/x/g, "*")
          : `${this.state.result}`;
        this.setState({
          result: eval(sum),
          calculator: false,
        });
      } else {
        this.setState({
          result: this.state.result,
        });
      }
    } else if (e.target.id === "DEL") {
      this.setState({ result: "0" });
    } else if (this.state.result === "0") {
      this.setState({
        result:
          e.target.id === "C" || /[x]|[+]|[-]|[/]/.test(e.target.id)
            ? "0"
            : e.target.id,
      });
    } else if (e.target.title === "operation" && last) {
      this.setState({
        result: this.state.result.replace(last, e.target.id),
      });
    } else {
      if (e.target.id === "C") {
        this.setState({
          result: "0",
        });
      } else if (this.state.calculator === false) {
        e.target.title !== "operation"
          ? this.setState({
              result: e.target.id,
              calculator: true,
            })
          : this.setState({
              result: this.state.result + e.target.id,
              calculator: true,
            });
      } else {
        this.setState({
          result:
            last && e.target.id === "0"
              ? this.state.result
              : this.state.result + e.target.id,
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
          {command.map((com, i) => (
            <Button
              onClick={this.input}
              id={com}
              key={`${com}${i}`}
              tone={"button"}
            />
          ))}
        </div>
        <div className="calculator-buttons">
          <div className="calculator-buttons-numbers">
            {numbers.map((number, i) => (
              <Button
                onClick={this.input}
                id={number}
                key={`${number}${i}`}
                tone={number === 0 ? "zero" : "button"}
              />
            ))}
          </div>
          <div className="calculator-buttons-operations">
            {operations.map((operation) => (
              <Button
                tone={"button"}
                sign={"operation"}
                onClick={this.input}
                key={operation}
                id={operation}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
