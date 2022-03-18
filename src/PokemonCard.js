import React from "react";

function PokemonCard({ name, image, types }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <div>
        {types.map((type) => (
          <span>{type}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
