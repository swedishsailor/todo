import React from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';

class Register extends React.Component {

    render(){
  return (
    <div className="Register" id="/register">
     <h1 className="registerHeader"> Register </h1>
     <input className="registerInput" type="email" placeholder="Your email"></input>
     <input className="registerInput" type="password" placeholder="Password"></input>
     <button type="submit" className="registerButton">submit</button>
     <p className="registerText"> or</p>
     <p className="registerText"> if you don't have account</p>
     <Link to="/register" >            
     <button className="registerRegister"> register </button>
     </Link>
    </div>
  );
  }
}

export default Register;