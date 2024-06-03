import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Job from './components/Job list';
import Estimate from './components/Estimate price';
import Prcing from './components/Pricing';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider, AuthContext } from './components/AuthContext';
import { useNavigate } from 'react-router-dom';
import Find from './components/Find';



function App() {
  const Headerstylee = {
    display: "flex",
    gap: "35px",
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <div>
            <nav style={Headerstylee}>
              <div style={{ display: "flex", textAlign: "center", marginLeft: "5px" }}>
                <img style={{ height: "25px", width: "25px" }} src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png" alt="logo" />
                <h3 style={{ marginTop: "3px", marginLeft: "5px" }}>namless</h3>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginLeft: "100px" }}>
                <Link to="/">
                  <h5>Start a search</h5>
                </Link>
                <Link to="/Job">
                  <h5>Job List</h5>
                </Link>
                <Link to="/Estimate">
                  <h5>Salary Estimate</h5>
                </Link>
                <Link to="/Prcing">
                  <h5>Pricing</h5>
                </Link>
              </div>
              <div style={{ display: "flex", gap: "10px", marginLeft: "100px" }}>
                <AuthButtons />
              </div>
            </nav>
          </div>
          
          <hr></hr>
          <Routes>
            <Route path="/" element={<Find/>} />
            <Route path="/Job" element={<ProtectedRoute><Job /></ProtectedRoute>} />
            <Route path="/Estimate" element={<ProtectedRoute><Estimate /></ProtectedRoute>} />
            <Route path="/Prcing" element={<ProtectedRoute><Prcing /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

function AuthButtons() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate('/signup');
  };

  if (isAuthenticated) {
    return <span style={{ display: "flex" }}>
      <button style={{ width: "80px", height: "35px", backgroundColor: "blue", color: "white", border: "1px light dark", borderRadius: "5px" }} onClick={handleLogout}   >Log Out</button>
      <h3 style={{ marginTop: "5px", marginLeft: "10px" }}> {user.username}</h3></span>;
  } else {
    return (
      <>
        <Link to="/login">
          <button style={{ width: "80px", height: "35px", backgroundColor: "white", border: "1px light dark", borderRadius: "5px" }}>Log in</button>
        </Link>
        <Link to="/signup">
          <button style={{ width: "80px", height: "35px", backgroundColor: "blue", color: "white", border: "1px light dark", borderRadius: "5px" }}>Sign up</button>
        </Link>
      </>
    );
  }
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
