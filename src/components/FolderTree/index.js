import React, { Component } from "react";
import FolderComponent from "./folderComponent";
import { folderData } from "./folderTree";

export default class FolderTree extends Component {
  renderFolder = () => {
    console.log(folderData);
    if (folderData.folder.folderType === "organizer") {
      return (
        <FolderComponent
          content={this.renderSubFolder(folderData.folder.parentFolder)}
        />
      );
    } else {
      return <FolderComponent />;
    }
  };
  renderSubFolder = (folderData) => {
    console.log(folderData);
    if (!folderData) {
      return;
    }
    let a = "";
    if (folderData.folderType === "organizer") {
      a = (
        <FolderComponent
          content={this.renderSubFolder(folderData.parentFolder)}
        />
      );
    } else {
      a = <FolderComponent />;
    }
    return a;
  };
  render() {
    return <div>{this.renderFolder()}</div>;
  }
}
