import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ icon, label }) => {
  return (
    <div className="aam_infobox">
      <div className="aam_infobox__icon">{icon}</div>
      <div className="aam_infobox__label">{label}</div>
    </div>
  );
};

export default InfoBox;