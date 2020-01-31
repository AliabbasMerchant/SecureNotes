import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import HomePage from './components/HomePage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import reducers from './reducers';
import { AUTHENTICATED } from './actions';
import SecretPage from "./components/SecretPage";
import Navbar from "./components/Navbar"

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const user = localStorage.getItem('user');
if (user) {
    store.dispatch({type : AUTHENTICATED});
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/secret" component={SecretPage}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        </Router>
    </Provider>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
