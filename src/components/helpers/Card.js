import React from "react";

function Card(props) {
  return (
    <div className={props.className}>
      <div>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <a href="">Learn more</a>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
}

export default Card;
