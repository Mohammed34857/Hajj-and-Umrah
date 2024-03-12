import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer>
      <div className="parent">
        <div className="address">
          <ul>
            <h2>address</h2>
            <li>
              <i className="fa fa-location"></i>location
            </li>
            <li>call +963 993642776</li>
            <li>demo@gmail.com</li>
            <li>
              <i></i>
              <i></i>
              <i></i>
            </li>
          </ul>
        </div>
        <div className="info">
          <h2>info</h2>
          <p>through our superior services and international parenter <br />we offer you multiplr options for program to visit the two holy <br />
          mosgues in mahwi al-afida.</p>
        </div>
        <div className="links">
          <h2>links</h2>
          <ul className="ul-two">
                <li><a href="">Home</a></li>
                <li><a href="#">Hajj Programs</a></li>
                <li><a href="#">Umrah programs</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Transport</a></li>
            </ul>
        </div>
        <div className="subscribe"> <h2>subscribe</h2>
        <input type="email" placeholder="enter email" />
        <br />
        <div className="line"></div>
        <button>subscribe</button>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-2">
              Copyright © 2036 <a href="#">Cyborg Hajj</a> Company. All rights
              reserved.
              <br />
              Design: <a href="#">TemplateMo</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
