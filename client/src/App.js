import React from 'react';
import './App.css';

import HomePage from './components/HomePage';
import Profile from "./components/Profile";
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <HomePage />
    </Provider>
  );
}

export default App;
