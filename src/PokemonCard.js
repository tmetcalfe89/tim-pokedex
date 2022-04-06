import React from "react";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function PokemonCard({ name, image, types, onDelete }) {
  return (
    <div className="card">
      <div>
        <button onClick={onDelete}>X</button>
      </div>
      <h1>{capitalizeWord(name)}</h1>
      <img src={image} width="150" height="150" />
      <div className="list around">
        {types.map((type) => (
          <span className={`pill ${type}`}>{capitalizeWord(type)}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
