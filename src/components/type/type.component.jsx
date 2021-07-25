import React from "react";

import "./type.style.css";

import scissors from "../../assets/img/scissors.svg";
import paper from "../../assets/img/paper.svg";
import rock from "../../assets/img/rock.svg";

function game(type, setPlayerWon) {
  const allTypes = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  console.log(
    `Computer chose: ${allTypes[computerChoice]}`,
    `you chose ${type}`
  );
  // All losing conditions if they all are false player won the round
  if (allTypes[computerChoice] === "rock" && type === "scissors") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === "paper" && type === "rock") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === "scissors" && type === "paper") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === type) {
    setPlayerWon("draw");
  } else {
    setPlayerWon(true);
  }
}

function Type({ type, setPlayerWon }) {
  switch (type) {
    case "scissors":
      return (
        <div className="img-box" onClick={() => game(type, setPlayerWon)}>
          <img src={scissors} alt={`${type}`} />
        </div>
      );
    case "paper":
      return (
        <div className="img-box" onClick={() => game(type, setPlayerWon)}>
          <img src={paper} alt={`${type}`} />
        </div>
      );
    default:
      return (
        <div className="img-box" onClick={() => game(type, setPlayerWon)}>
          <img src={rock} alt={`${type}`} />
        </div>
      );
  }
}

export default Type;
