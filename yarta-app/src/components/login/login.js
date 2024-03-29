import React, { useState } from "react";
import styles from "./login.module.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    setEmail("");
    setPassword("");
    createAuthCookie();
  };
  const createAuthCookie = () => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Cookie expires in 1 year
    document.cookie = "yartAuthCookie=true; expires=" + expirationDate.toUTCString() + "; path=/;";
    window.location.reload();
  };
  


  return (
    <div className={styles.login}>
      <h2 className={styles.heading}>Login</h2>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.loginForm}>
              <label>Email:</label>
              <input
                className={styles.formInput}
                type="user"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.loginForm}>
              <label>Password:</label>
              <input
                className={styles.formInput}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button className={styles.loginButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
