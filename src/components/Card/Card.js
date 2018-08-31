//represents each card

import React from "react";
import "./Card.css";

const Card = props => (
  <div className="column" onClick={() => props.onClick(props.id)}>
    <img src={props.src} alt={props.id}/>
  </div>
);

export default Card;