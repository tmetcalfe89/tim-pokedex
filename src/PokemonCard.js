import React from "react";

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function PokemonCard({ name, image, types }) {
  return (
    <div>
      <h1>{capitalizeWord(name)}</h1>
      <img src={image} />
      <div>
        {types.map((type) => (
          <span>{capitalizeWord(type)}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
