import Pokecard from './Pokecard.js';

/**
 * Accepts an array of card objects.
 * 
 * Returns card html for each object
 */
function Pokedex({ cards }) {
  return (cards.map(card => {
    return Pokecard(card);
  }))
}

export default Pokedex;