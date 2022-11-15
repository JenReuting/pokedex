import Pokecard from './Pokecard.js';
import './Pokedex.css';
/**
 * Accepts an array of card objects.
 * 
 * Returns card html for each object
 */
function Pokedex({ cardData }) {
  return(
    <div className = "Pokedex">
      {cardData.map(card => 
        <Pokecard 
          id={card.id} 
          type={card.type} 
          name={card.name}
          exp={card.base_experience}
        />)
      }
    </div>
  )

}

export default Pokedex;