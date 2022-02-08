import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchItem, setSearchItem] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))

  }, [])

  const createPlant = newPlant => {
    setPlants(oldPlants => {
      return [...oldPlants, newPlant]
    })
  }

  const handleFilter = e => {
    setSearchItem(e.target.value)
  }

  const plantsToDisplay = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchItem.toLowerCase())
  })

  return (

    <main>
      <NewPlantForm createPlant={createPlant} />
      <Search handleFilter={handleFilter} plantsToDisplay={plantsToDisplay}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
