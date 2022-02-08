import React, { useState } from "react";

function NewPlantForm({addPlantToState}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const createPlant = e => {
    e.preventDefault()

    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    addPlantToState(newPlant)

  }
  
  // this way is the same just less space
  // its allowed because the key and the variable have the same name
  // const newPlant = { name, image, price } 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={createPlant}>



        <input onChange= { e => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />

        <input onChange= { e => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />

        <input onChange= { e => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />



        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
