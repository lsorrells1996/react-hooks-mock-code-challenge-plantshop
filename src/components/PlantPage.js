import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))

  }, [])

  const addPlantToState = plant => {

    setPlants([plant, ...plants])

  }

  const changeSearchValue = e => {
    setSearch(e.target.value)
  }

  
  const searchedPlants = plants.filter( plant =>  plant.name.toLowerCase().includes(search.toLowerCase()) )

  
  return (

    <main>
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search changeSearchValue={changeSearchValue} />
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
