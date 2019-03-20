import React from "react";
import "./pokeDisplay.css";

export default function(props) {
  return (
    <div className="user-display--component">
      <div>
        <p> {props.name} </p>
        <img src={props.image} alt='' />
      </div>
    </div>
  );
}
