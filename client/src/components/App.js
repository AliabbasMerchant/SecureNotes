import "materialize-css/dist/css/materialize.min.css"
import React, { Component } from 'react'
import OAuth from "./OAuth"
import Main from "./Main";
import TopBar from "./TopBar";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";

export class App extends Component {

  state = {
    isAuth : true,
    userInfo : []
  }

  changeState = () => {
    const prevState = this.state;
    this.setState({isAuth : !prevState.isAuth})
  }

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    if(!this.state.isAuth){ 
      return (
        <div>
          <GoogleLogin 
            /*clientId=safe*/ 
            buttonText="LOGIN"
            onSuccess={this.changeState}
            onFailure={responseGoogle}
            cookiePolicy='single_host_origin'
          />
        </div>
      )
    }
    else 
    {
      return (
        <div>
          <TopBar/>
          <Main/>
          <div>
          <GoogleLogout
            clientId="126520301268-guvrivj1b6vpsotmob7eaulk7l8tgaug.apps.googleusercontent.com"
            buttonText="LOGOUT"
            onSuccess={this.changeState}
          />
          </div>
        </div>
      )
    }

  }

}

export default App
