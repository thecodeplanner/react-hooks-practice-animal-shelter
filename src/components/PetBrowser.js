import React from "react";

import Pet from "./Pet";

function PetBrowser( {onAdoptPet, pets}) {

  const petToShow = pets.map((pet) => {
    return (
      <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
    )
  })

  return <div className="ui cards">{petToShow}</div>;
}

export default PetBrowser;
