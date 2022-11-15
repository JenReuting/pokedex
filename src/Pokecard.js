/**
 * Accepts an id, type, and name for a pokemon
 * 
 * Returns html containing that information for an individual card
 */
function Pokecard({ id, type, name }) {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img className="Pokecard-image" src={img} alt="pokemon card"></img>
      <p className="Pokecard-type">Type: {type}</p>
    </div>
  )
}

export default Pokecard;