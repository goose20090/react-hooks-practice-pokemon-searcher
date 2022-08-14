import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokedex, setPokedex] = useState([])
  const [pokemon, setPokemon]= useState([])

  const [search, setSearch]= useState("")

  useEffect(()=>{
    fetch ("http://localhost:3001/pokemon")
    .then(res=> res.json())
    .then(pokemon=> {
      setPokedex(pokemon)
      setPokemon(pokemon)
    }) 
  }, [])

  function handleSearchChange(e){
    let inputValue= e.target.value
    setSearch((search)=> inputValue)


  }

  function addNewPokemon(newPokemon){
    let newArr = [newPokemon, ...pokemon]
    setPokedex(newArr)

  }
 

  useEffect(()=> {
        let newArr = pokemon.filter((pokemon)=> pokemon.name.includes(search))
        console.log(newArr)
        setPokedex(newArr)

  }, [search])



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search handleSearchChange = {handleSearchChange} search = {search} setSearch= {setSearch}/>
      <br />
      <PokemonCollection pokedex={pokedex} />
    </Container>
  );
}

export default PokemonPage;
