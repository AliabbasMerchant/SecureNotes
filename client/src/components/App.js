import React, { Component } from 'react'
import Main from "./Main";
import TopBar from "./TopBar";
import Signup from "./Signup";

export class App extends Component {

  state = {
    isAuth : true,
    userInfo : ''
  }

  render() {
    if (this.state.isAuth){
      return (
      <div className="App">
        <TopBar/>
        <Main />
      </div>
      )
    }
    else {
      return (
        <div className="App">
          <Signup/>
        </div>
      )
    }

  }
}

export default App
