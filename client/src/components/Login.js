import React,     { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {buttonClicked, isLoading} from "../actions/uiActions";
import {login} from "../actions/authActions";
import {Link} from "react-router-dom";
import "./style.css";

class Login extends Component {
  state = {
    email : "",
    password: "",
    msg : ""
  };

  static propTypes = {
    buttonClicked : PropTypes.func.isRequired,
    isLoading : PropTypes.func.isRequired,
    button : PropTypes.bool,
    login : PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool,
    status : PropTypes.object.isRequired,
    loading : PropTypes.bool
  };

  componentDidMount() {
    this.props.buttonClicked();
  }

  componentDidUpdate(prevProps) {
    const status = this.props.status;
    if (status !== prevProps.status) {
        if (status.id === "LOGIN_FAIL"){
            this.setState({msg : status.statusMsg});
        }
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const user = {email, password};
    this.props.isLoading();
    this.props.login(user);
  };

  render() {
    let className = 'divStyle';
    if (!this.props.button) {
      className = 'formStyle';
    }
    return (
      <div className={className}>
        <div className="card green">
            <div className="card-content white-text" >
              <span className="card-title">Login </span>  
              <br/>
              <p>
                Don't have an account?
                <Link to="/register"> Register. </Link>
              </p>
              <br/>
              {this.state.msg ? 
                  <h2 color="red">{this.state.msg}</h2>
                  : null
              }
              <form className="col s12" method="post" onSubmit={this.onSubmit}>
                <div className='row'>
                  <div className='col s12'>
                  </div>
                </div>

              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='email' name='email' id='email' 
                  onChange={this.onChange} placeholder="Enter your email"/>
                  <label for='email'>Email</label>
                </div>
              </div>

              <div className='row'>
                <div className='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' onChange={this.onChange}
                  placeholder="Enter your password"/>
                  <label for='password'>Password</label>
                </div>
                <label style={{float: 'right'}}>
                  <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                </label>
              </div>

              <br />
              <center>
                <div className='row'>
                  <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                </div>
              </center>
            </form>
          </div>
        </div>    
      </div>
    )
  }
    
}

const mapStateToProps = (state) => ({
  button : state.ui.button,
  isAuthenticated : state.auth.isAuthenticated,
  status : state.status,
  loading : state.ui.loading
});

export default connect(mapStateToProps, {login, isLoading, buttonClicked})(Login);