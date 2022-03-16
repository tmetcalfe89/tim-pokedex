(function () {
  const pokenameForm = document.getElementById("pokename");

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

  function addEventListeners() {
    pokenameForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const pokename = formData.get("pokename");

      const data = await getPokemonData(pokename);
      if (data === null) {
        console.log("Pokemon not found.");
        return;
      }
      if (data.error) {
        console.error(error);
        return;
      }
      console.log(data);
    });
  }

  addEventListeners();
})();
