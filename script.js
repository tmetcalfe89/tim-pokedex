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
        alert("Pokemon not found.");
        return;
      }
      if (data.error) {
        alert(error);
        return;
      }

      buildPokemonCard(data);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  function cloneTemplate(selector) {
    const templateElement = document.querySelector(selector);
    const newTemplate = templateElement.content.cloneNode(true);
    return newTemplate;
  }

  function buildPokemonCard(data) {
    const containerElement = cloneTemplate("#cardTemplate");

    const nameElement = containerElement.querySelector(".cardName");
    nameElement.textContent = capitalizeWord(data.name);

    const imageElement = containerElement.querySelector(".cardImage");
    imageElement.src = data.image;

    const typeContainer = containerElement.querySelector(".cardTypes");
    for (let type of data.types) {
      const typeElement = cloneTemplate("#typeTemplate");
      const typeNameElement = typeElement.querySelector(".typeName");
      typeNameElement.textContent = capitalizeWord(type);
      typeNameElement.classList.add(type);
      typeContainer.appendChild(typeElement);
    }

    pokelist.appendChild(containerElement);
  }

  function addEventListeners() {
    pokenameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const pokename = formData.get("pokename").toLowerCase();
      pokenameElement.value = "";
      addPokemonToList(pokename);
    });
  }

  addEventListeners();
})();
