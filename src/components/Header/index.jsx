// src/components/Header/index.jsx
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo-light.png";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Australia Zoo" />
    </header>
  );
}

export default Header;
