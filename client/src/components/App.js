import React, { Component } from 'react'
import TopBar from "./TopBar";
import Main from "./Main";

import "materialize-css/dist/css/materialize.min.css"
export class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <Main/>
      </div>
    );
  }
}

export default App
