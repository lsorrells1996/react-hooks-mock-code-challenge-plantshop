import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))

  }, [])

  console.log("test")
  return (

    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantData={plants} />
    </main>
  );
}

export default PlantPage;
