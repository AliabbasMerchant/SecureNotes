import React from 'react';
import './App.css';
import TopBar from "./TopBar";
import Main from "./Main";
import "materialize-css/dist/css/materialize.min.css"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Main />
    </div>
  );
}

export default App;
