// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="foronlylogo" src={assets.logout_icon} alt="" />
          <p>
            A good food restaurant offers delicious, fresh, and high-quality
            meals with excellent service, a cozy ambiance, and a diverse menu.
            It provides a memorable dining experience that satisfies every
            customer’s taste and preference.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+371 22473340</li>
            <li>sujaishanmugam6234@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Tomato - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
