import './Pokecard.css';

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

/**
 * Accepts an id, type, and name for a pokemon
 * 
 * Returns html containing that information for an individual card
 */
function Pokecard({ id, type, name, exp}) {
 
  const img = `${BASE_URL}/${id}.png`
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img className="Pokecard-image" src={img} alt={name}></img>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  )
}

export default Pokecard;