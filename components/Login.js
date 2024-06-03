import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
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
    navigate('/signup');
  };

  return (
    <div>
      <div style={{
        backgroundColor: "white",
        height: "400px",
        width: "500px",
        /* border-radius: 8px; */
        textAlign: "center",
        marginLeft: "30%",
        marginTop: "10%",
        paddingTop: "10px",
        borderTop: "5px solid dark",
      }}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "left",
     marginLeft: "70px",
    fontSize: "13px"}}>

          <div>
            <label>Username :</label>
            <input style={textInput} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password :</label>
            <input style={textInput} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button style={{
            marginTop: "40px",
            backgroundColor: "#340789",
            color: "white",
            /* border-radius: 15px; */
            width: "90px",
            height: "30px",
            borderStyle: "none"
          }} type="submit">Login</button>

<p>Don't  have already account?<span style={{color: "blue"}} onClick={handleLoginRedirect}> sign up </span></p>
        </div>
        </form>
        </div>
      </div>
      );
};

      export default Login;
