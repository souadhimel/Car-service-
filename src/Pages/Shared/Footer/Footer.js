import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { BsFacebook,BsTwitter,BsInstagram,BsPinterest,BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="footer">
        <div className="share">
          <Link to="#" className="btn"><BsFacebook></BsFacebook></Link>
          <Link to="#" className="btn"><BsTwitter></BsTwitter></Link>
          <Link to="#" className="btn"><BsInstagram></BsInstagram></Link>
          <Link to="#" className="btn"><BsPinterest></BsPinterest></Link>
          <Link to="#" className="btn"><BsLinkedin></BsLinkedin></Link>
        </div>
  
        <h1 className="credit">
          copyright@ | all rights reserved! @2022
        </h1>
      </section>
    );
};

export default Footer;