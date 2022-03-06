import React from "react";
import Button from "./UI/Button";

function Header() {
  return (
    <div className="header">
      <div className="header__columnOne">
        <h1>Make Room For Better Living</h1>
        <h4>We are a award winning interior design studio</h4>
        <p>
          we've come along way since then. But while building homes, knock down
          rebuilds and duplex home design remains our passion.
        </p>
        <div>
          <Button>Get Started</Button>
          <div>
            <img />
            Watch Video
          </div>
        </div>
      </div>
      <div className="header__columnTwo">
        <img />
        <h3>Astro Project Branding 2022</h3>
      </div>
    </div>
  );
}

export default Header;
