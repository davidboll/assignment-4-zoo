// src/pages/Home/index.jsx
import React, { useState } from "react";
import AnimalList from "../../components/AnimalList";
import AnimalSummary from "../../components/AnimalSummary";
import { allAnimals } from "../../Data/animals";
import styles from "./Home.module.css";

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <div className={styles.home}>
      <aside className={styles.sidebar}>
        <AnimalList
          animals={allAnimals}
          setActiveAnimal={setActiveAnimal}
          activeAnimal={activeAnimal}
        />
      </aside>
      <main className={styles.mainContent}>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <p>
            Welcome to the Australia Zoo! Select an animal from the list to
            learn more about them.
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
