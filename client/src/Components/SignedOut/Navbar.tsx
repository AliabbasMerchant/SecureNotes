import React from "react";
import { Link } from "react-router-dom";
import color from "../../Assets/color";

const Navbar = () => {
  const styles = {
    color: color.navColor,
  };

  return (
    <nav>
      <div className="nav-wrapper  " style={styles.color}>
        <ul id="nav-mobile" className="left">
          <li>
            <Link to="/" className="left">
              <i className="material-icons left hide-on-small-only">home</i>
              Home
            </Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link to="/SignUp">
              <i className="material-icons left hide-on-small-only">
                how_to_reg
              </i>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="SignIn">
              <i className="material-icons left hide-on-small-only">login</i>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
