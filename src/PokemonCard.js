import React from "react";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function PokemonCard({ name, image, types }) {
  return (
    <div className="card">
      <h1>{capitalizeWord(name)}</h1>
      <img src={image} />
      <div className="list around">
        {types.map((type) => (
          <span className={`pill ${type}`}>{capitalizeWord(type)}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
