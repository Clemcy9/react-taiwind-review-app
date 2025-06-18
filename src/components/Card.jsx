import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <div>
      <div>
        <img src={props.src} alt={props.name + "image"} />
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <Button name="Give Feedback" outline="true" />
      </div>
    </div>
  );
}

export default Card;
