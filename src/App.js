import React, { useState } from "react";

function App() {
  const [pokename, setPokename] = useState("");

  function handlePokenameSubmit(e) {
    e.preventDefault();
    console.log(pokename);
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
