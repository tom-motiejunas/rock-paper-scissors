import React from "react";

import "./type.style.css";

import scissors from "../../assets/img/scissors.svg";
import paper from "../../assets/img/paper.svg";
import rock from "../../assets/img/rock.svg";

function game(type) {
  const allTypes = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  // All losing conditions if they all are false player won the round
  if (allTypes[computerChoice] === "rock" && type === "scissors") {
  } else if (allTypes[computerChoice] === "paper" && type === "rock") {
  } else if (allTypes[computerChoice] === "scissors" && type === "paper") {
  } else {
  }
  console.log(allTypes[computerChoice]);
  console.log(`you chose ${type}`);
}

function Type({ type }) {
  switch (type) {
    case "scissors":
      return (
        <div className="img-box" onClick={() => game(type)}>
          <img src={scissors} alt={`${type}`} />
        </div>
      );
    case "paper":
      return (
        <div className="img-box" onClick={() => game(type)}>
          <img src={paper} alt={`${type}`} />
        </div>
      );
    default:
      return (
        <div className="img-box" onClick={() => game(type)}>
          <img src={rock} alt={`${type}`} />
        </div>
      );
  }
}

export default Type;
