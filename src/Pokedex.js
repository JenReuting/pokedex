import Pokecard from './Pokecard.js';
import './Pokedex.css';
/**
 * Accepts an array of card objects.
 * 
 * Returns card html for each object
 */
function Pokedex({ cardData, exp, isWinner }) {
  return (
    <div
      className="Pokedex"
      exp={exp}
    >
      {cardData.map(card =>
        <Pokecard
          id={card.id}
          type={card.type}
          name={card.name}
          exp={card.base_experience}
        />)
      }
      {isWinner?"THIS HAND WINS!":""}
    </div>
  )

}

export default Pokedex;