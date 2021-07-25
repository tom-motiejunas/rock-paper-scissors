import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Type from "./components/type/type.component";

function App() {
  const [playerWon, setPlayerWon] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  useEffect(() => {
    if (playerWon === true) {
      setPlayerScore(playerScore + 1);
    } else if (playerWon === false) {
      setCompScore(compScore + 1);
    } else if (playerWon === "draw") {
      console.log("DRAW");
    }
  }, [playerWon]);
  return (
    <div className="App">
      <Header playerScore={playerScore} compScore={compScore}></Header>
      <section className="type-box">
        <Type type="rock" setPlayerWon={setPlayerWon}></Type>
        <Type type="paper" setPlayerWon={setPlayerWon}></Type>
        <Type type="scissors" setPlayerWon={setPlayerWon}></Type>
      </section>
    </div>
  );
}

export default App;
