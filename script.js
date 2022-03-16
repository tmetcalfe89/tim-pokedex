(function () {
  const pokenameForm = document.getElementById("pokename");

  function addEventListeners() {
    pokenameForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(formData.get("pokename"));
    });
  }

  addEventListeners();
})();
