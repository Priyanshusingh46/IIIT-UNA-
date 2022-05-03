import React from 'react';
import rimage from '../Images/Register.jpg'
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup');
  }
  return (
    <div className="Register">
      <div className="Rimage">
        <img src={rimage} alt="error" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 style={{ fontSize: "50px", color: "white" }}>Register to my Site</h1>
        <input type="text" id="name" placeholder="Enter the name"></input><br></br>
        <input type="text" id="email" placeholder="Enter Your Email"></input><br></br>
        <input type="text" id="password" placeholder="Enter Your Password"></input><br></br>
        <input type="text" id="cpassword" placeholder="Confirm Password"></input><br></br>
        <button id="button1" type='submit'>Register</button>
        <button id="button2" onClick={() => {
          navigate('/signup');
        }}>Sign In</button>
      </form>
    </div>
  );
}

export default Register;