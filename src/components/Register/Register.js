import React from 'react';
import './Register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Register extends React.Component {

    render(){
  return (
    <div className="Register" id="/register">
     <h1 className="registerHeader"> Register </h1>
     <input className="registerInput" type="email" placeholder="Your email"></input>
     <input className="registerInput" type="password" placeholder="Password"></input>
     <input className="registerInput" type="password" placeholder="Repeat Password"></input>
     <button type="submit" className="registerButton">Create</button>
     <Link to="/">
     <FontAwesomeIcon icon={faDoorOpen} className="exitIcon"/>
     </Link>
    </div>
  );
  }
}

export default Register;