// src/components/Navigation/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mammals">Mammals</Link>
        </li>
        <li>
          <Link to="/birds">Birds</Link>
        </li>
        <li>
          <Link to="/reptiles">Reptiles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
