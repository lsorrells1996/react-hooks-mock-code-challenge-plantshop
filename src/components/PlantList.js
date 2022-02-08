import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  return (
    <ul className="cards">{props.plantData.map((plantObj) => <PlantCard key={plantObj.id} plant={plantObj} />)}</ul>
  );
}

export default PlantList;
