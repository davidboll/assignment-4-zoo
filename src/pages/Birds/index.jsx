import React, { useState } from "react";
import { birds } from "../../Data/animals";
import styles from "./Birds.module.css";
import AnimalList from "../../components/AnimalList";
import AnimalSummary from "../../components/AnimalSummary";

const Birds = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <AnimalList
          animals={birds}
          setActiveAnimal={setActiveAnimal}
          activeAnimal={activeAnimal}
        />
      </aside>
      <div className={styles.animalsWrapper}>
        <h1 className={styles.header}>Birds of Australia</h1>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <p>Select an animal from the list to learn more about them.</p>
        )}
      </div>
    </div>
  );
};

export default Birds;
