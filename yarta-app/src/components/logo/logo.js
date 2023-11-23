import React from "react";
import styles from "./logo.module.css";
import logo from "../../components/assets/logo.png";

const Logo = ({ handleButton }) => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>Yet Another React Task App</p>
        </header>
        <div className={styles.buttonContainer} id="loginButton">
          <button className={styles.button} onClick={handleButton}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Logo;
