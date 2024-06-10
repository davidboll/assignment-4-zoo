import React from "react";
import styles from "./AnimalList.module.css";

const AnimalList = ({ animals, setActiveAnimal, activeAnimal }) => {
  const handleAnimalClick = (animal) => {
    if (activeAnimal && animal.name === activeAnimal.name) {
      setActiveAnimal(null);
    } else {
      setActiveAnimal(animal);
    }
  };

  return (
    <>
      <h4>List of animals</h4>
      <ul className={styles.list}>
        {animals.map((animal) => (
          <li
            key={animal.name}
            onClick={() => handleAnimalClick(animal)}
            className={
              activeAnimal && animal.name === activeAnimal.name
                ? styles.active
                : ""
            }>
            {animal.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AnimalList;
