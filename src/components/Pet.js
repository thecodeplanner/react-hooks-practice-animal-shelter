import React from "react";

function Pet({pet, onAdoptPet}) {
  function handleAdoptClick() {
    onAdoptPet(pet.id)
  }

  let showGender = ''
  if (pet.gender === 'male') {
    showGender = '♂'
  }else {
    showGender = '♀'
  }
  
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
          {showGender}
          
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted.toString()}
        {pet.isAdpoted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={handleAdoptClick} className="ui primary button">Adopt pet</button> )}
        
        
        
      </div>
    </div>
  );
}

export default Pet;
