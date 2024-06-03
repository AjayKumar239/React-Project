import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Login from './Login';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Implement your registration logic here
    login(username);
    navigate('/');
  };


  const textInput =
  {
    /* border-radius: 10px; */
    backgroundColor: "rgb(239, 244, 244)",
    borderStyle: "0px",
    marginTop: "5px",
    height: "30px",
    width: "240px",
    paddingLeft: "35px",

  };
  const handleLoginRedirect = () => {
    navigate('/login');
  };


  return (
    <div style={{ backgroundColor: "#0ea4ea",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>
      <div style={{
        backgroundColor: "white",
        height: "400px",
        width: "500px",
        /* border-radius: 8px; */
        textAlign: "center",
        marginLeft: "30%",
        marginTop: "10%",
        paddingTop: "10px",
        borderTop:"5px solid dark",
      }}>


        <h2>Register</h2>
        
          <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "left",
     marginLeft: "70px",
    fontSize: "13px"}}>
            <div>
              <label>Username :</label>
              <input style={textInput} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
              <label>Email :</label>
              <input style={textInput} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Password :</label>
              <input style={textInput} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label>Confirm Password :</label>
              <input style={textInput} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>

        </div>
        <button style={{
          marginTop: "40px",
          backgroundColor: "#340789",
          color: "white",
          /* border-radius: 15px; */
          width: "90px",
          height: "30px",
          borderStyle: "none"
        }} type="submit">Register</button>
        
        <p>Do you  have already account?<span style={{color: "blue"}} onClick={handleLoginRedirect}> log in </span></p>
      </form>
    </div>
    </div >
  );
};

export default Signup;
