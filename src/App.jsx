import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import Type from "./components/type/type.component";
import Results from "./components/results/results.component";

function App() {
  const [playerWon, setPlayerWon] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [playerPick, setPlayerPick] = useState(null);
  const [compPick, setCompPick] = useState(null);
  const [roundEnded, setRoundEnded] = useState(true);

  // We add roundEnded at each if / else if block instead at the bottom, because useEffect gets called at the start and it messes up the logic
  useEffect(() => {
    if (playerWon === true) {
      setPlayerScore(playerScore + 1);
      setRoundEnded(false);
    } else if (playerWon === false) {
      setCompScore(compScore + 1);
      setRoundEnded(false);
    } else if (playerWon === "draw") {
      console.log("draw");
      setRoundEnded(false);
    }
  }, [playerWon]);

  useEffect(() => {
    if (roundEnded === true) {
      setPlayerWon(null);
      setPlayerPick(null);
      setCompPick(null);
    }
  }, [roundEnded]);

  return (
    <div className="App">
      <Header playerScore={playerScore} compScore={compScore}></Header>
      {roundEnded ? (
        <section className="type-box">
          <Type
            type="rock"
            setPlayerWon={setPlayerWon}
            setPlayerPick={setPlayerPick}
            setCompPick={setCompPick}
          ></Type>
          <Type
            type="paper"
            setPlayerWon={setPlayerWon}
            setPlayerPick={setPlayerPick}
            setCompPick={setCompPick}
          ></Type>
          <Type
            type="scissors"
            setPlayerWon={setPlayerWon}
            setPlayerPick={setPlayerPick}
            setCompPick={setCompPick}
          ></Type>
        </section>
      ) : (
        <Results
          playerWon={playerWon}
          playerPick={playerPick}
          compPick={compPick}
          setRoundEnded={setRoundEnded}
        ></Results>
      )}
    </div>
  );
}

export default App;
