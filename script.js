(function () {
  const pokenameForm = document.getElementById("pokename");

  const pokemonList = [];

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

  async function addPokemonToList(pokename) {
    try {
      const data = await getPokemonData(pokename);

      if (data === null) {
        console.log("Pokemon not found.");
        return;
      }
      if (data.error) {
        console.error(error);
        return;
      }

      pokemonList.push(data);
    } catch (error) {
      console.error(error);
    }
  }

  function addEventListeners() {
    pokenameForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const pokename = formData.get("pokename");
      await addPokemonToList(pokename);
      console.log(pokemonList);
    });
  }

  addEventListeners();
})();
