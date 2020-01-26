import React, { Component } from 'react'

export class OAuth extends Component {
    componentDidMount() {
        /*global gapi*/
        window.gapi.load('auth2', ()=> {
          this.auth2 = gapi.auth2.init({
            client_id : '126520301268-sgm1rgofvihuej1j21iho2mi9ch1hl4p.apps.googleusercontent.com'
          })
        });

        window.gapi.load('signin2', function () {
            var opts = {
                width :200,
                height: 50,
                onSuccess : this.onSuccess.bind(this)
            }
            gapi.signin2.render('loginButton', opts);
        })
    }

    render() {
        return (
            <div>
                <header className="App-header">            
                <p>You are not signed in. Click here to sign in.</p>
                <button id="loginButton">Login with Google</button>
                </header>         
            </div>
        )
    }
}

export default OAuth
