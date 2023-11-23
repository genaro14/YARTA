import React from "react";
import styles from "./close.module.css";

const Navbar = () => {
  const handleExitButtonClick = () => {
    document.cookie =
      "yartAuthCookie=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();

  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navList}>
        <button className={styles.button} onClick={handleExitButtonClick}>
          Exit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
