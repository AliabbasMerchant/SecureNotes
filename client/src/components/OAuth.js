import {GoogleLogin} from "react-google-login";
import React, { Component } from 'react'

export class OAuth extends Component {
    constructor() {
        super();
        this.state = {
          isAuth : false,
          user : null,
          token : ''
        };
      }
    
      logout = () => {
        this.setState({
          isAuth : false,
          user : null,
          token : ''
        })
      }
      
      googleResponse = (e) => {};
    
      onFailure = (error) => {
        alert(error);
      }
    
      render() {
        let content = !!this.state.isAuthenticated ?
        (
          <div>
              <p>Authenticated</p>
              <div>
                  {this.state.user.email}
              </div>
              <div>
                  <button onClick={this.logout} className="button">
                      Log out
                  </button>
              </div>
          </div>
        ) :
        (
          <div>
              <GoogleLogin
                  clientId="126520301268-sgm1rgofvihuej1j21iho2mi9ch1hl4p.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.googleResponse}
                  cookiePolicy='single_host_origin'
              />
          </div>
        );
    
        return (
            <div className="App">
                {content}
            </div>
        );
    
      }
}

export default OAuth
