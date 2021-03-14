import React, { useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Card from "../Components/SignedIn/Card";
import Navbar from "../Components/SignedIn/Navbar";
import NotesOverview from "../Components/SignedIn/NotesOverview";
import Notifications from "../Components/SignedIn/Notifications";
import Settings from "../Components/SignedIn/Settings";
import SideNavOpt from "../Components/SignedIn/SideNavOpt";
import SideNavOptMob from "../Components/SignedIn/SideNavOptMob";
import options from "../Images/Settings.gif";

interface Props {}

const Main2 = (props: Props) => {
  const M = window.M;
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }, []);

  const styles = {
    sidenav: {
      height: "86vh",
      paddingLeft: "0px",
    },
    top: {
      height: "20rem",
    },
    image: {
      width: "20rem",
    },
  };

  return (
    <Router>
      <div>
        <Navbar />

        <div className="row">
          <div
            className=" col s2 hide-on-med-and-down  "
            style={styles.sidenav}
          >
            <div>
              <Link to="/">
                <SideNavOpt title="OVERVIEW" />
              </Link>
              <Link to="/notification">
                <SideNavOpt title="NOTIFICATION" />
              </Link>
              <Link to="/">
                <SideNavOpt title="SOME_OTHER_OPTION" />
              </Link>
              <Link to="/settings">
                <SideNavOpt title="SETTINGS" />
              </Link>
            </div>
          </div>

          <div className="">
            <ul id="slide-out" className="sidenav">
              <div className="" style={styles.top}>
                <img src={options} style={styles.image} alt="" />
              </div>
              <Link to="/">
                <SideNavOptMob title="OVERVIEW" />
              </Link>
              <Link to="/notification">
                <SideNavOptMob title="NOTIFICATION" />
              </Link>
              <Link to="/">
                <SideNavOptMob title="SOME_OTHER_OPTION" />
              </Link>
              <Link to="/settings">
                <SideNavOptMob title="SETTINGS" />
              </Link>
            </ul>
          </div>

          <div className="col l10 m12 s12 ">
            <Route path="/" exact component={NotesOverview} />
            <Route path="/notification" component={Notifications} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main2;
