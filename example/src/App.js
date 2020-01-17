import React, { Component } from "react";

import {
  BasicHeader,
  ThreeColGrid,
  CenteredTextBlock,
  BasicFooterSocial,
  ImageSideAboutBlock
} from "ui-blocks";

export default class App extends Component {
  render() {
    return (
      <div>
        <BasicHeader
          showCta={false}
          textAlignment="left"
          backgroundImage="https://images.unsplash.com/photo-1501791330673-603715379ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />

        {/* <CenteredTextBlock /> */}

        <ImageSideAboutBlock
          heading="Awesome Feature One"
          image="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />

        <ImageSideAboutBlock
          imagePosition="right"
          heading="Awesome Feature Two"
          image="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />

        {/* <ThreeColGrid backgroundColor="#fff" /> */}

        <BasicFooterSocial />
      </div>
    );
  }
}
