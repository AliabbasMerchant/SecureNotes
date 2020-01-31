import React, { Component } from 'react'
import HomePage from "./HomePage";
import TopBar from "./TopBar";

export class SecretPage extends Component {

  render() {
    return (
      <div>
        <TopBar/>
        <HomePage/>
      </div>
    )
  }
}

export default SecretPage