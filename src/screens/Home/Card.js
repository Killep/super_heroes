import React from "react";
import "./Card.css";

function Card({ name, data }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={data} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <div>strength: {data.powerstats.strenght}</div>
        <div>speed: {data.powerstats.speed}</div>
        <div>power: {data.powerstats.power}</div>
      </div>
    </div>
  );
}

export default Card;
