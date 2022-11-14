import Pokecard from './Pokecard.js';

function Pokedex(cards) {
  return ( cards.map(card => {
    return Pokecard(card);
  }))
}

export default Pokedex;