//scoreboard component.  sets score.

import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <div className="scoreboard">
    Score: <span className="score">{props.score}</span>
  </div>
);

export default Scoreboard;