import React, { Component } from "react";

export default class FolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    console.log(this.state.open);
    return (
      <div>
        <i
          class={!!this.state.open ? "fa fa-folder-open" : "fa fa-folder"}
          onClick={() => this.setState({ open: !this.state.open })}
        ></i>
        <div>lll</div>
        {!!this.state.open && <div>{this.props.content}</div>}
      </div>
    );
  }
}
