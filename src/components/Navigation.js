import React, {Component} from 'react';
import { Link }  from 'react-router-dom';

import * as routes from '../constants/routes';
import SignOutButton from "./SignOut";

const NavigationWhenAuthenticated = () =>
    <ul>
        <li><Link to={routes.LANDING}/>Landing</li>
        <li><Link to={routes.HOME}/>Home</li>
        <li><Link to={routes.ACCOUNT}/>Account</li>
        <li><SignOutButton/></li>
    </ul>

const NavigationWhenNotAuthenticated = () =>
    <ul>
        <li><Link to={routes.SIGN_IN}/>Sign In</li>
    </ul>

export default function Navigation({authUser}) {
    return ( <div>
        { authUser
            ? <NavigationWhenAuthenticated />
            : <NavigationWhenNotAuthenticated />
        }
    </div>);
};