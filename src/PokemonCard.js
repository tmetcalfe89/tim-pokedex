import React from "react";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function PokemonCard({ name, images, types, shiny, onDelete, onShiny }) {
  return (
    <div className="card">
      <div>
        <button onClick={onDelete}>X</button>
        <button onClick={onShiny}>Shiny</button>
      </div>
      <h1>{capitalizeWord(name)}</h1>
      <img
        src={shiny ? images.shiny : images.default}
        width="150"
        height="150"
      />
      <div className="list around">
        {types.map((type) => (
          <span className={`pill ${type}`}>{capitalizeWord(type)}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
