import React from "react";
import "./NoIconBox.scss";

const NoIconBox = ({ label }) => {
  return (
    <div className="aam_noiconbox">
      <div className="aam_noiconbox__label">{label}</div>
    </div>
  );
};

export default NoIconBox;