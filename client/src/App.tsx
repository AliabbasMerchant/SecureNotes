import React from "react";
import logo from "./logo.svg";
import Main from "./Screens/Main";
import "./App.css";
import Main2 from "./Screens/Main2";

function App() {
  const temporary = 0;

  return <div className="App">{temporary ? <Main2 /> : <Main />}</div>;
}

export default App;
