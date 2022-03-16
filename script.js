(function () {
  const pokenameForm = document.getElementById("pokename");
  const pokenameElement = document.querySelector("#pokename input");
  const pokelist = document.getElementById("pokelist");

  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  async function getPokemonData(pokename) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );
      if (response.ok) {
        const pokedata = await response.json();

        const cleanedPokedata = {};
        cleanedPokedata.name = capitalizeWord(pokedata.name);
        cleanedPokedata.image = pokedata.sprites.front_default;
        cleanedPokedata.types = [];
        for (let typeData of pokedata.types) {
          cleanedPokedata.types.push(capitalizeWord(typeData.type.name));
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

      buildPokemonCard(data);
    } catch (error) {
      console.error(error);
    }
  }

  function buildPokemonCard(data) {
    const containerElement = document.createElement("div");

    const nameElement = document.createElement("h1");
    nameElement.textContent = data.name;
    containerElement.appendChild(nameElement);

    const imageElement = document.createElement("img");
    imageElement.src = data.image;
    containerElement.appendChild(imageElement);

    const typeContainer = document.createElement("div");
    for (let type of data.types) {
      const typeElement = document.createElement("span");
      typeElement.textContent = type;
      typeContainer.appendChild(typeElement);
    }
    containerElement.appendChild(typeContainer);

    pokelist.appendChild(containerElement);
  }

  function addEventListeners() {
    pokenameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const pokename = formData.get("pokename");
      pokenameElement.value = "";
      addPokemonToList(pokename);
    });
  }

  addEventListeners();
})();
