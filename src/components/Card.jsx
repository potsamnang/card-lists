import React from "react";
import "./card.css";

const Card = ({ img, name, detail }) => {
  return (
    <div className="pro">
      <img src={img} alt="pro" />
      <h3>{name}</h3>
      <h3>{detail}</h3>
    </div>
  );
};

export default Card;
