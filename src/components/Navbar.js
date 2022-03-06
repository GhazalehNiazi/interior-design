import React from "react";
import Button from "./UI/Button";
function Navbar() {
  return (
    <div>
      <h3>Plerio.</h3>
      <div>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </div>
      <Button>Free Consultation</Button>
    </div>
  );
}

export default Navbar;
