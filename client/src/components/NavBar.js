import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    navbarLinks() {
        if (this.props.authenticated) {
            return [
                <li key="secret"><Link to="/secret">Secret</Link></li>,
                <li key="signout"><Link to="/signout">Sign Out</Link></li>
            ];
        }
        return [
            <li key="signin"><Link to="/signin">Sign In</Link></li>,
                <li key="signup"><Link to="/signup">Sign Up</Link></li>
        ];
    } 

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to="/"><span className="brand">Auth-app</span></Link>
                    <ul>
                        {this.navbarLinks()}
                    </ul>
                </div>
            </nav>
        )
    }

}

function mapStateToProps(state) {
    return {
        authenticated : state.authenticated
    };
}

export default connect(mapStateToProps)(Navbar);