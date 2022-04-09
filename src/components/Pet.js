import React from "react";

function Pet({
  pet: { id, type, gender, age, weight, name, isAdopted },
  onAdoptPet,
}) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender === "female" ? "♀" : "♂"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className={`ui {${isAdopted} ? "primary" : "disabled"} button`}
          onClick={() => onAdoptPet(id)}
        >
          Already adopted
        </button>
        <button
          className={`ui {${isAdopted} ? "disabled" : "primary"} button`}
          onClick={() => onAdoptPet(id)}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
