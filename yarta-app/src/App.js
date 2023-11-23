import React, { useState, useEffect } from "react";
import Login from "./components/login/login";
import TasksList from "./components/tasksList/tasksList";
import Logo from "./components/logo/logo";
import Navbar from "./components/close/close";
import "./App.css";

function App() {
  const handleLoginButtonClick = () => {
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
      loginButton.style.display = "none";
      setloginState(true);
    }
  };
  const handleLoginForm = (succes) => {
      if (succes) {
        setAuthState(true)
      };
  };

  const [loginState, setloginState] = useState(false);
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    const checkAuthCookie = () => {
      const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('yartAuthCookie=true'));
      // document.cookie="yartAuthCookie=true"      
      if (authCookie) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    };

    checkAuthCookie();
  }, []);
  const handleExitButtonClick = () => {
    document.cookie = "yourAuthCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Trigger a re-render by updating the state
    setAuthState(false);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      {!authState && <Logo handleButton={handleLoginButtonClick} />}

      {!!loginState && !authState && <Login handleLogin={handleLoginForm} />}

      {!!authState && <TasksList />}
    </div>
  );
}

export default App;
