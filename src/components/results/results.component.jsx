import React from "react";

import "./results.style.css";

function Results({ playerWon, playerPick, compPick, setRoundEnded }) {
  let resultString = "";
  if (playerWon === true) {
    resultString = "You Won";
  } else if (playerWon === false) {
    resultString = "You Lost";
  } else {
    resultString = "Draw";
  }

  return (
    <div>
      <section className="results-box">
        <div className="player-pick">
          <span>You picked</span>
          <img src={`../../src/assets/img/${playerPick}.svg`} alt="" />
        </div>
        <div className="comp-pick">
          <span>Computer picked</span>
          <img src={`../../src/assets/img/${compPick}.svg`} alt="" />
        </div>
      </section>
      <footer className="round-conclusion">
        <h2>{resultString}</h2>
        <button onClick={() => setRoundEnded(true)}>Play Again?</button>
      </footer>
    </div>
  );
}

export default Results;
