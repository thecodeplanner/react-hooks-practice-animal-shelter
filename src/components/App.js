import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function handleFilter(animal) {
    setFilters( {type: animal} )
  }
  console.log(filters)

  function handleFindPets() {
    let url = 'http://localhost:3001/pets'
      if (filters.type !== 'all') {
        url = url + `?type=${filters.type}`
      }
      fetch(url)
        .then(response => response.json())
        .then(pets => setPets(pets))
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilter} onFindPetsClick={handleFindPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoptPet} pets ={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
