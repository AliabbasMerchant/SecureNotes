import React,     { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {buttonClicked, isLoading} from "../actions/uiActions";
import {login} from "../actions/authActions";
import {Link} from "react-router-dom";
import "./style.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
   CardTitle,
   CardSubtitle,
  CardBody,
  Alert,
  Spinner
} from "reactstrap";

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
            <div className="card green darken-1">
                <div className="card-content white-text" >
                  <span className="card-title">Login </span>  
                  <br/>
                <p className="text-muted">
                  Don't have an account?
                  <Link to="/register"> Register. </Link>
                </p>
                <br/>
                {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
                  <Form onSubmit={this.onSubmit} >
                  <FormGroup>

                    <Label for="email">E-mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      size="lg"
                      placeholder="you@youremail.com"
                      className="mb-3"
                      onChange={this.onChange}
                    />

                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      size="lg"
                      placeholder="Enter your Password"
                      className="mb-3"
                      onChange={this.onChange}
                    />
                    <a class="waves-effect waves-light btn">button</a>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i class="material-icons right">send</i>
                    </button>
                        { this.props.loading ?
                        <span >Logging in.. 
                          <Spinner size="sm" color="light" />
                        </span> :
                        <span>
                          Login
                        </span>
                        
                        }
                    
                  </FormGroup>
                </Form>
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