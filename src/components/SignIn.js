import React, {Component} from 'react';
import * as auth from "../firebase/auth";
import * as routes from "../constants/routes";
import {SignUpLink} from "./SignUp";
import {withRouter} from "react-router-dom";

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

const SignIn = ({history}) =>
    <div>
        <h1>Sign In</h1>
        <SignInForm history={history}/>
        <SignUpLink/>
    </div>

class SignInForm extends Component {

    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        const {history} = this.props;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
            })
            .catch((error) => this.setState({error: error}));
    };

    render() {

        const {email, password, error} = this.state;
        const isInvalid = password === '' | email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState({email: event.target.value})}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={event => this.setState({password: event.target.value})}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>

                { error && <p>{error.message}</p> }
            </form>);
    }
}
export default withRouter(SignIn);

export {
    SignInForm
};