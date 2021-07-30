import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Erg-1",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/1187.jpg",
  },

  {
    id: 2,
    title: "Ben 10",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/1365.jpg",
  },

  {
    id: 3,
    title: "Agent 13",
    url: "https://www.superherodb.com/pictures2/portraits/10/100/167.jpg",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ name, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={name} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
