import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padTo3 = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padTo3(this.props.id)}.png`;
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title"> {this.props.name} </h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type} </div>
        <div className="Pokecard-data">Power: {this.props.power} </div>
      </div>
    )
  }
}

export default Pokecard;
