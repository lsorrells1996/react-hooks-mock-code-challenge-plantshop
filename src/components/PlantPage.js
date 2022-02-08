import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))

  }, [])

  const createPlant = (newPlant) => {
    setPlants(oldPlants => {
      return [...oldPlants, newPlant]
    })
  }

  const handleFilter = e => {
    return e.target.value
  }

  return (

    <main>
      <NewPlantForm createPlant={createPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
