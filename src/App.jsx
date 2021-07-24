import React, { useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Type from "./components/type/type.component";

function App() {
  const [roundConcluded, setRoundConcluded] = useState(false);
  if (roundConcluded) {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header></Header>
        <section className="type-box">
          <Type type="rock" setRoundConcluded={setRoundConcluded}></Type>
          <Type type="paper"></Type>
          <Type type="scissors"></Type>
        </section>
      </div>
    );
  }
}

export default App;
