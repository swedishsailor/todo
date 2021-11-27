import React from 'react';
import './Login.scss';

class Login extends React.Component {

    render(){
  return (
    <div className="Login" id="/">
     <h1 className="loginHeader"> Login </h1>
     <input className="loginInput" type="email" placeholder="Your email"></input>
     <input className="loginInput" type="password" placeholder="Password"></input>
     <button type="submit" className="loginButton">submit</button>
     <p className="loginText"> or</p>
     <p className="loginText"> if you don't have account</p>
     <a className="loginRegister"> register </a>
    </div>
  );
  }
}

export default Login;