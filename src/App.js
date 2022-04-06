import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { v4 as uuid } from "uuid";
import "./styles.css";

function App() {
  const [pokename, setPokename] = useState("");
  const [pokemonList, setPokelist] = useState([]);

  function deletePokemon(id) {
    setPokelist(pokemonList.filter((pokeData) => pokeData.id !== id));
  }

  function toggleShiny(id) {
    setPokelist(
      pokemonList.map((pokeData) =>
        pokeData.id === id ? { ...pokeData, shiny: !pokeData.shiny } : pokeData
      )
    );
  }

  async function getPokemonData(pokename) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );
      if (response.ok) {
        const pokedata = await response.json();

        const cleanedPokedata = {};
        cleanedPokedata.name = pokedata.name;
        // cleanedPokedata.image = pokedata.sprites.front_default;
        cleanedPokedata.images = {
          default: pokedata.sprites.front_default,
          shiny: pokedata.sprites.front_shiny,
        };
        cleanedPokedata.types = [];
        for (let typeData of pokedata.types) {
          cleanedPokedata.types.push(typeData.type.name);
        }
        cleanedPokedata.id = uuid();
        cleanedPokedata.shiny = false;
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
    const data = await getPokemonData(pokename.toLowerCase());
    setPokename("");
    if (data === null) {
      alert("Pokemon not found.");
      return;
    }
    if (data.error) {
      alert(data.error);
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
      <div className="list">
        {pokemonList.map((pokemonData) => (
          <PokemonCard
            {...pokemonData}
            onDelete={() => deletePokemon(pokemonData.id)}
            onShiny={() => toggleShiny(pokemonData.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
