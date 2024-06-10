import React from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalSummary.module.css";

const AnimalSummary = ({ animal }) => {
  return (
    <div className={styles.summary}>
      <h2>{animal.name}</h2>
      <img src={animal.image} alt={animal.name} />
      <p>{animal.description}</p>
      <p>
        <strong>Diet:</strong> {animal.food}
      </p>
      <p>
        <strong>Found in:</strong> {animal.found}
      </p>
      <p>
        <strong>Group:</strong>{" "}
        <Link to={`/${animal.group}`}>{animal.group}</Link>
      </p>
    </div>
  );
};

export default AnimalSummary;
