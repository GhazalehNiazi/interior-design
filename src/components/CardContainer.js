import React from "react";
import Card from "./helpers/Card";
import photo from "../assests/pink-chair.jpg";
function CardContainer() {
  return (
    <div className="CardContainer">
      <Card
        className="CardContainer__card active"
        h2="See Our Latest Project"
        p=" for over 50 years, we have developed lasting, trusted relationships with
    both costumers."
        img={photo}
        active
      />
      <Card
        className="CardContainer__card"
        h2="Exterior & Interior"
        p="We provide the greatest value to our customers by offering preferred products and superior."
      />
      <Card
        className="CardContainer__card"
        h2="Industry Experienced"
        p="Efficient, safe, and professional basement and multi-level delivery service is available."
      />
    </div>
  );
}

export default CardContainer;
