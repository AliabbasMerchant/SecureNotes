import React, {Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { buttonClicked, isLoading } from "../actions/uiActions";
import { Link } from "react-router-dom";
import { register } from "../actions/authActions";
import "./style.css"
import {Spinner} from "reactstrap";

class Register extends Component {
    state = {
        name : "",
        email: "",
        password: "",
        msg: ""
    };

    static propTypes = {
        buttonClicked : PropTypes.func.isRequired,
        button : PropTypes.bool,
        register : PropTypes.func.isRequired,
        status : PropTypes.object.isRequired,
        loading : PropTypes.bool
    };

    componentDidMount() {
        this.props.buttonClicked();
    }

    componentDidUpdate(prevProps) {
        const status = this.props.status;
        if (status !== prevProps.status) {
            if (status.id === "REGISTER_FAIL"){
                this.setState({msg: status.statusMsg});
            }
            else {
                this.setState({msg : this.props.status.statusMsg});
            }
        }

        if (status.id ==="REGISTER_SUCCESS"){
            setTimeout(() => {
                this.props.history.push("/login")
            }, 2000);
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = this.state;
        const user = {name, email, password};
        this.props.isLoading();
        this.props.register(user);
    };

    render() {
        let className = "divStyle";
        let alert;
        if (this.state.msg && this.props.status.respCode >= 400) {
        alert = <p color="red">{this.state.msg}</p>;
        } else if (this.state.msg && this.props.status.respCode === 200) {
        alert = (
            <p style={{color:'green'}}>
            {this.state.msg} <br /> Redirecting to Log In screen
            </p>
        );
        }

        if (!this.props.button) {
        className = "formStyle";
        }
        return (
            <div className={className}>
                <div className="card green">                
                    <div className="card-content white-text" >
                    <span className="card-title">Register</span>  
                Already have an account?
                <Link to="/login"> Log In. </Link>
                <br />
                {alert}
                <form className="col s12" method="post" onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input className='validate' type='text' name='name' id='name' onChange={this.onChange}/>
                            <label for="name">Username</label>
                        </div>

                        <div className='input-field col s12'>
                            <input className='validate' type='email' name='email' id='email' onChange={this.onChange}/>
                            <label for='email'>Email ID</label>
                        </div>

                        <div className='input-field col s12'>
                            <input className='validate' type='password' name='password' id='password' onChange={this.onChange}/>
                            <label for='password'>Password</label>
                        </div>
                        <label style={{float: 'right'}}/>
                    </div>
                    <center>
                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>
                    { this.props.loading ?
                        <span >Registering.. <Spinner size="sm" color="light" /></span> : <span>Register</span>}
                    </button>
                    </center>
                </form>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    button: state.ui.button,
    status: state.status,
    loading: state.ui.loading
  });
  
export default connect(
mapStateToProps,
{ register, isLoading, buttonClicked }
)(Register);