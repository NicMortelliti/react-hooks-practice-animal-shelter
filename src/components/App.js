import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then(r => r.json())
      .then(pets => setPets(pets));
  }, []);

  function updatePetsArray() {
    let newUrl = "http://localhost:3001/pets";
    if (filters !== "all") {
      newUrl = `${newUrl}?type=${filters}`;
    }
    fetch(newUrl)
      .then(r => r.json())
      .then(filteredPets => setPets(filteredPets));
  }

  function updateAdoptionStatus(id) {
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        const updatedPet = {
          ...pet,
          isAdopted: true,
        };

        return updatedPet;
      }
      return pet;
    });
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={e => setFilters(e.target.value)}
              onFindPetsClick={updatePetsArray}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={updateAdoptionStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
