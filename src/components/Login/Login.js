import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return (
            <div className="Login" id="/">
                <h1 className="loginHeader"> Login </h1>
                <input className="loginInput" type="email" placeholder="Your email"></input>
                <input className="loginInput" type="password" placeholder="Password"></input>
                <Link to="/mainview">
                    <button type="submit" className="loginButton">submit</button>
                </Link>
                <p className="loginText"> or</p>
                <Link to="/register" className="register">
                    register
                </Link>
                <p className="loginText"> if you don't have account</p>
            </div>
        );
    }
}

export default Login;