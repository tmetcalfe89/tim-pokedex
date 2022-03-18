import React, { useState } from "react";

function App() {
  const [pokename, setPokename] = useState("");

  async function getPokemonData(pokename) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );
      if (response.ok) {
        const pokedata = await response.json();
        return pokedata;
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
    console.log(data);
  }

  function handlePokenameUpdate(e) {
    setPokename(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handlePokenameSubmit}>
        <input value={pokename} onChange={handlePokenameUpdate} />
      </form>
      <div></div> {/* This will become our pokelist. */}
    </div>
  );
}

export default App;
