import React, { Component } from 'react';
import './Pokefield.css';
import Pokedeck from './Pokedeck';

class Pokefield extends Component {
  constructor() {
    super()
    this.state = {
      hand1: [],
      hand2: [],
      power1: '',
      power2: '',
      isBtnClick: false
    }
  }

  static defaultProps = {
    pokemens: [
      { id: 4, name: 'Charmander', type: 'fire', base_power: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_power: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_power: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_power: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_power: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_power: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_power: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_power: 65 }
    ]
  }

  randomSuffle = () => {
    let hand1 = [];
    let hand2 = [...this.props.pokemens];
    while (hand1.length < hand2.length) {
      let randIndex = Math.floor(Math.random() * hand2.length);
      let randPokemen = hand2.splice(randIndex, 1)[0];
      hand1.push(randPokemen);
    }
    console.log(hand1);
    console.log(hand2);

    let power1 = hand1.reduce((exp, pokemen) => exp + pokemen.base_power, 0);
    let power2 = hand2.reduce((exp, pokemen) => exp + pokemen.base_power, 0);

    this.setState({
      hand1: hand1,
      hand2: hand2,
      power1: power1,
      power2: power2,
      isBtnClick: true
    });
  }

  render() {
    const { hand1, hand2, power1, power2 } = this.state;

    return (
      <>
        <div
          className='poke-btn'
          onClick={() => this.randomSuffle()}
        >Poke me!</div>
        {this.state.isBtnClick ?   
          <div>
            <Pokedeck pokemens={hand1} power={power1} isWinner={power1 > power2} />
            <Pokedeck pokemens={hand2} power={power2} isWinner={power2 > power1} />
          </div>
          : <div></div>
        }
      </>
    )
  }
}

export default Pokefield;
