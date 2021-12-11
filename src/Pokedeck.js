import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedeck.css';

class Pokedeck extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h2 className='Pokedeck-winner'>Winning Hand</h2>;
    } else {
      title = <h2 className='Pokedeck-loser'>Losing Hand</h2>;
    }

    return(
      <div className="Pokedeck">
        {title}
        <h4>Total Power: {this.props.power}</h4>
        <div className="Pokedeck-cards">
          {this.props.pokemens.map(pokemen => (
            <Pokecard 
              key={pokemen.id}
              id={pokemen.id} 
              name={pokemen.name}
              type={pokemen.type}
              power={pokemen.base_power}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedeck;
