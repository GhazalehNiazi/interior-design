import React from "react";
import image from '../assests/avery-klein-JaXs8Tk5Iww-unsplash.jpg'
function Contact() {
  return (
    <div className="contact">
      <div className="contact__columnOne">
      <h1>pterio.</h1>
      <form>
      <h2>Join Our Newsletter</h2>
          <input type="email" placeholder="Email Address"/>
        </form>
      </div>
      <div className="contact__columnTwo">
       <div> <img src={image}/></div>
        <h2>Intreseted In working With Us?</h2>
      </div>
    </div>
  );
}

export default Contact;
