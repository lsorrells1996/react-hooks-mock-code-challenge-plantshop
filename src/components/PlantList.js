import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsToDisplay}) {
  return (
    <ul className="cards">{plantsToDisplay.map(plant => <PlantCard key={plant.id} plant={plant} /> )}</ul>
  );
}

export default PlantList;
