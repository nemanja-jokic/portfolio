import React, { Component } from "react";

export default class FolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    console.log(this.props.folderData);
    return (
      <div className="folder">
        <div className="folder-wrapper">
          <i
            class={
              !!this.state.open
                ? this.props.folderData.folderType !== "docFolder"
                  ? "fa fa-folder-open"
                  : "fa fa-folder"
                : "fa fa-folder"
            }
            onClick={() => this.setState({ open: !this.state.open })}
          ></i>
          <div>{this.props.folderData.name}</div>
        </div>
        {!!this.state.open && (
          <div className="folder-content">{this.props.content}</div>
        )}
      </div>
    );
  }
}
