import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h2 className='Pokedex-winner'>Winning Hand</h2>;
    } else {
      title = <h2 className='Pokedex-loser'>Losing Hand</h2>;
    }

    return(
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemens.map(pokemen => (
            <Pokecard 
              id={pokemen.id} 
              name={pokemen.name}
              type={pokemen.name}
              exp={pokemen.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;
