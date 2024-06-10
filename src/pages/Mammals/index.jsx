import React, { useState } from "react";
import { mammals } from "../../Data/animals";
import styles from "./Mammals.module.css";
import AnimalList from "../../components/AnimalList";
import AnimalSummary from "../../components/AnimalSummary";

const Mammals = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <AnimalList
          animals={mammals}
          setActiveAnimal={setActiveAnimal}
          activeAnimal={activeAnimal}
        />
      </aside>
      <div className={styles.animalsWrapper}>
        <h1 className={styles.header}>Mammals of Australia</h1>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <p>Select an animal from the list to learn more about them.</p>
        )}
      </div>
    </div>
  );
};

export default Mammals;
