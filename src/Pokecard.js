
function Pokecard({id, type, name}) {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
  <div className="card">
    <p class="card-name">{name}</p>
    <img class="card-image" src={img} alt="pokemon card"></img>
    <p class="card-type">{type}</p>
  </div>
  )
}

export default Pokecard;