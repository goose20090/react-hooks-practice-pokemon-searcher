import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const initialState = {

    hp: "",
    sprites: {
      back: "",
      front: "",
    }


  }
  const [formData, setFormData]= useState(initialState)



  function handleChange(e){
    if (e.target.name === "frontUrl"){

      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          front: `${e.target.value}`
        }
      })}
    
    else if (e.target.name === "backUrl"){
      setFormData({
        ...formData,
        sprites: {
          ...formData.sprites,
          back: `${e.target.value}`
        }
      })
    }

    else{setFormData({
      ...formData,
      [e.target.name]: `${[e.target.value]}`
    })}
  }

  useEffect(()=> console.log(formData), [formData])

  function handleSubmit(e){
    const newPokemon = {...formData}
    e.preventDefault()
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }).then(res=> res.json())
    .then(pokemon=> addNewPokemon(pokemon))

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onChange = {handleChange}
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
