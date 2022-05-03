import React from 'react';
import rimage from '../Images/Register.jpg'
import bg from '../Images/bg.jpg'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  }
  return (
    <div className="Register">
      <div className="Rimage">
        <img src={rimage} alt="error" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 style={{ fontSize: "50px", color: "white" }}>Login to my Site</h1>
        <input type="text" id="name" placeholder="Enter the name" required></input><br></br>
        <input type="text" id="email" placeholder="Enter Your Email" required></input><br></br>
        <input type="text" id="password" placeholder="Enter Your Password" required></input><br></br>
        <button id="button3" type='submit'>Sign in</button>
      </form>
    </div>
  );
}

export default Signup;