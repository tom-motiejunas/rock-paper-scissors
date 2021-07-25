import React from "react";

import "./header.style.css";

function Header({ playerScore, compScore }) {
  return (
    <header className="header-box">
      <h1>Rock Paper Scissors</h1>
      <div className="score comp">
        <h2>Computer:</h2>
        <span>{compScore}</span>
      </div>
      <div className="score player">
        <h2>Player:</h2>
        <span>{playerScore}</span>
      </div>
    </header>
  );
}

export default Header;
