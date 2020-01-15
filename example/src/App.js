import React, { Component } from "react";

import { BasicHeader, ThreeColGrid, CenteredTextBlock } from "ui-blocks";

export default class App extends Component {
  render() {
    return (
      <div>
        <BasicHeader
          textAlignment="left"
          ctaOnClick={() => alert("Click!")}
          backgroundImage="https://images.unsplash.com/photo-1501791330673-603715379ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <CenteredTextBlock />
        <ThreeColGrid backgroundColor="#f2f2f2" />
        <CenteredTextBlock />
      </div>
    );
  }
}
