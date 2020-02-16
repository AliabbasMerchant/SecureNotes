import React, { Component } from "react";
import Login  from "./Login";
import Register from "./Register";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import store from "../store";
import { isAuth } from "../actions/authActions";

var divStyle = {
    color: 'white'
}

export class HomePage extends Component {
    componentDidMount() {
        store.dispatch(isAuth())
    }

    static propTypes = {
        button : PropTypes.bool,
        isAuthenticated : PropTypes.bool
    }

    render() {
        return (
            <div className="container">
                <div className="main">
                    <h1 style={divStyle}>Welcome to SecureNotes! </h1>
                    <br />
                    <h5 style={divStyle}> Sessions based Auth</h5>
                    <div>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </Switch>

                    {
                        this.props.button && <Link className='divStyle' to='/login'>
                            <button size="lg" color="blue">Sign In</button>
                        </Link>
                    }
                    {
                        this.props.button && <Link className='divStyle' to='/register'>
                            <button size="lg" color="blue">Register</button>
                        </Link>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    button : state.ui.button,
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(HomePage);