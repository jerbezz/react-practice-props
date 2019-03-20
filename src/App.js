import React, { Component } from "react";
import "./App.css";
import PokeDisplay from "./components/pokeDisplay/PokeDisplay";
import UserInput from "./components/userInput/UserInput";

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      image: '',
      pokemon: []
    }
  }
  
  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick = () => {
    const {name, image} = this.state;
    const poke = {name, image}
    this.setState({pokemon: [...this.state.pokemon, poke], name: '', image: ''})
  }
  
  render ( ) {
    let pokemon = this.state.pokemon.map((pokemon, index) => {
      return (
        <PokeDisplay key={index} name={pokemon.name} image={pokemon.image} />
      )
    })
    return (
      <div className="app--component">
        <h3> Pokemon Catch 'em All </h3>
        <UserInput
          handleInput={this.handleInput}
          handleClick={this.handleClick}
          name={this.state.name}
          image={this.state.image}
          />
        <section className="users--container">
          {pokemon}
        </section>
      </div>
    );
  }
}