import React from "react";
import Home from "../Components/SignedOut/Home";
import Navbar from "../Components/SignedOut/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "../Components/SignedOut/SignIn";
import SignUp from "../Components/SignedOut/SignUp";
import Main2 from "./Main2";

function Main() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
      </div>
    </Router>
  );
}

export default Main;
