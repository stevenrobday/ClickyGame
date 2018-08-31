//flex wrapper component

import React from "react";
import "./Row.css";

const Row = props => <div className="row">{props.children}</div>;

export default Row;