import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/login/login';
import TasksList from './components/tasksList/tasksList';
import logo from './components/assets/logo.png';
import './App.css';

function App() {
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLoginButtonClick = () => {
    setLoginClicked(true);
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.style.display = 'none'; // Set to 'block' or 'inline-block' to show the button
    }
  };

  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Yet Another React Task App</p>
          </header>
          <div className='button-container' id='loginButton'>
            {/* Use a button with an onClick handler */}
            <button className='button' onClick={handleLoginButtonClick}>
              <Link className='link-style'  to="/login">Login</Link>
            </button>
          </div>
        </div>
        {/* Use Routes component to define routes */}
        <Routes>
          {loginClicked && <Route path="/login" element={<Login />} />}
          <Route path="/tasks" element={<TasksList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
