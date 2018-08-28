import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import * as routes from "../constants/routes";
import Landing from "./Landing";
import SignUp from "./SignUp";
import Home from "./Home";
import Account from "./Account";
import SignIn from "./SignIn";
import PasswordForget from "./PasswordForget";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import { firebase } from '../firebase';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: null
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser})
                : this.setState({ authUser: null});
        });
    }

  render() {
    return (
        <Router>
            <div>
                <Navigation authUser={this.state.authUser}/>

                <hr/>
                <Route
                    exact={true}
                    path={routes.LANDING}
                    component={Landing}/>
                <Route
                    exact={true}
                    path={routes.SIGN_UP}
                    component={SignUp}/>
                <Route
                    exact={true}
                    path={routes.SIGN_IN}
                    component={SignIn}
                />
                <Route
                    exact={true}
                    path={routes.HOME}
                    component={Home}/>
                <Route
                    exact={true}
                    path={routes.ACCOUNT}
                    component={Account}/>
                <Route
                    exact={true}
                    path={routes.PASSWORD_FORGET}
                    component={PasswordForget}/>
            </div>

        </Router>
    );
  }
}

export default App;
