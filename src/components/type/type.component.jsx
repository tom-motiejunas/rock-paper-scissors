import React from "react";

import "./type.style.css";

import scissors from "../../assets/img/scissors.svg";
import paper from "../../assets/img/paper.svg";
import rock from "../../assets/img/rock.svg";

function game(type, setPlayerWon, setPlayerPick, setCompPick) {
  const allTypes = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  setPlayerPick(type);
  setCompPick(allTypes[computerChoice]);
  console.log(allTypes[computerChoice], type);
  // All losing conditions if they all are false player won the round
  if (allTypes[computerChoice] === "rock" && type === "scissors") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === "paper" && type === "rock") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === "scissors" && type === "paper") {
    setPlayerWon(false);
  } else if (allTypes[computerChoice] === type) {
    setPlayerWon("draw");
    console.log("ITS A DRAW");
  } else {
    setPlayerWon(true);
  }
}

function Type({ type, setPlayerWon, setPlayerPick, setCompPick }) {
  switch (type) {
    case "scissors":
      return (
        <div
          className="img-box"
          onClick={() => game(type, setPlayerWon, setPlayerPick, setCompPick)}
        >
          <img src={scissors} alt={`${type}`} />
        </div>
      );
    case "paper":
      return (
        <div
          className="img-box"
          onClick={() => game(type, setPlayerWon, setPlayerPick, setCompPick)}
        >
          <img src={paper} alt={`${type}`} />
        </div>
      );
    default:
      return (
        <div
          className="img-box"
          onClick={() => game(type, setPlayerWon, setPlayerPick, setCompPick)}
        >
          <img src={rock} alt={`${type}`} />
        </div>
      );
  }
}

export default Type;
