import React, { Component } from 'react'
import {API_URL} from "./config";
import FontAwesome from "react-fontawesome"
export class OAuth extends Component {
    state = {
        user : {},
        disabled : ''
    }

    checkPopup () {
        const check = setInterval(() => {
            const {popup} = this;
            if (!popup || popup.closed || popup.closed == undefined){
                clearInterval(check);
                this.setState({disabled : ''});
            }
        }, 1000);
    }

    openPopup() {
        const {provider, socket} = this.props;
        const width = 600, height = 600;
        const left = (window.innerWidth/2) - (width/2);
        const top = (window.innerHeight/2) - (height/2);
        const url = `${API_URL}/${provider}?socketId=${socket.id}`

        return window.open(url, '', 
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        )
    }

    componentDidMount() {
        const {socket, provider} = this.props;

        socket.on(provider, user => {
            this.popup.close();
            this.setState({user})
        });
    }

    startAuth(e) {
        if (!this.state.disabled){
            e.preventDefault();
            this.popup = this.openPopup();
            this.checkPopup();
            this.setState({disabled : 'disabled'});
        }
    }

    closeCard() {
        this.setState({user : {}});
    }

    render() {
        const { name, photo} = this.state.user
    const { provider } = this.props
    const { disabled } = this.state
    
    return (
      <div>
        {name
          ? <div className={'card'}>              
              <img src={photo} alt={name} />
              <FontAwesome
                name={'times-circle'}
                className={'close'}
                onClick={this.closeCard.bind(this)}
              />
              <h4>{name}</h4>
            </div>
          : <div className={'button-wrapper fadein-fast'}>
              <button 
                onClick={this.startAuth.bind(this)} 
                className={`${provider} ${disabled} button`}
              >
                <FontAwesome
                  name={provider}
                />
              </button>
            </div>
        }
      </div>
    )}
}

export default OAuth
