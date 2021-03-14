import React from "react";
import { Link } from "react-router-dom";
import color from "../../Assets/color";

const Navbar = () => {
  const styles = {
    color: color.navColor,
    sidenav: {
      marginLeft: "0px",
    },
  };

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper  " style={styles.color}>
          <ul id="nav-mobile" className="left ">
            <li>
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger"
                style={styles.sidenav}
              >
                <i className="material-icons ">menu</i>
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="left">
            <li>
              <a href="#" className="brand-logo center">
                <i className="material-design ">Secure Notes</i>
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right ">
            <li>
              <a href="#">
                <i className="material-icons left hide-on-small-only">logout</i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
