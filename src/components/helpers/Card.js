import React from "react";

function Card(props) {
  return (
    <div className={props.className}>
      <div >
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <a href="">Learn more</a>
      </div>
      <div className={`${props.className}__columnTwo`}>
        {props.active ? <img src={props.img}/> : null}
      </div>
    </div>
  );
}

export default Card;
