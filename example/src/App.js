import React, { Component } from "react";

import { BasicHeader, ThreeColGrid } from "ui-blocks";

export default class App extends Component {
  render() {
    return (
      <div>
        <BasicHeader
          textAlignment="left"
          backgroundImage="https://images.unsplash.com/photo-1501791330673-603715379ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <ThreeColGrid />
      </div>
    );
  }
}
