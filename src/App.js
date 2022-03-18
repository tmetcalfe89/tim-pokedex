import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function App() {
  const [pokename, setPokename] = useState("");
  const [pokemonList, setPokelist] = useState([]);

  async function getPokemonData(pokename) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );
      if (response.ok) {
        const pokedata = await response.json();

        const cleanedPokedata = {};
        cleanedPokedata.name = pokedata.name;
        cleanedPokedata.image = pokedata.sprites.front_default;
        cleanedPokedata.types = [];
        for (let typeData of pokedata.types) {
          cleanedPokedata.types.push(typeData.type.name);
        }
        return cleanedPokedata;
      }
      return null;
    } catch (error) {
      return {
        error: error,
      };
    }
  }

  async function handlePokenameSubmit(e) {
    e.preventDefault();
    const data = await getPokemonData(pokename);
    if (data === null) {
      console.log("Pokemon not found.");
      return;
    }
    if (data.error) {
      console.error(data.error);
      return;
    }
    setPokelist([...pokemonList, data]);
  }

  function handlePokenameUpdate(e) {
    setPokename(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handlePokenameSubmit}>
        <input value={pokename} onChange={handlePokenameUpdate} />
      </form>
      <div>
        {pokemonList.map((pokemonData) => (
          <PokemonCard {...pokemonData} />
        ))}
      </div>
    </div>
  );
}

export default App;
