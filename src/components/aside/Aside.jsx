import React from "react";

import {
  ImageProfile,
  Location,
  Email,
  Phone,
  Linkedin,
  Facebook
} from "../contact";
import "./styles.css";

export default () => {
  return (
    <div className="aside-container">
      <div className="img-profile-container">
        <ImageProfile
          url="http://edgar-colon.herokuapp.com/images/profile.png"
          alt="Edd img"
        />
        <div className="top-details">
          <h1>Edgar Colón Barrientos</h1>
          <p>Fullstack developer</p>
        </div>
      </div>
      <div className="aside-info">
        <Location>Ciudad de México</Location>
        <Email>edgar.colonb@gmail.com</Email>
        <Phone>7444328340</Phone>
        <Phone>5582404965</Phone>
        <Linkedin url="https://www.linkedin.com/in/edgar-colon-barrientos/" />
        <Facebook url="https://web.facebook.com/informaticaavanzadaip" />
      </div>
    </div>
  );
};
