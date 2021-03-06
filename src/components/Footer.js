import React from "react";

function Footer() {
  return (
    <div className='footer'> 
      <div className="footer__columnOne">
        <ul >
          <li className="footer__columnOne-category">Services</li>
          <li>
            <a href="">Our brands</a>
          </li>
          <li>
            <a href="">designers</a>
          </li>
          <li>
            <a href="">Agents</a>
          </li>
          <li>
            <a href="">Our Gallery</a>
          </li>
        </ul>
        <ul>
          <li className="footer__columnOne-category">Contact</li>
          <li>
            <a href="">Terms and Service</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <ul>
          <li className="footer__columnOne-category">Contact</li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
        </ul>
      </div>
      <div  className="footer__columnTwo">2022. all rights to Ghazale Niazi</div>
    </div>
  );
}

export default Footer;
