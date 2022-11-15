import Pokedex from './Pokedex.js';

function Pokegame({cardData}) {
    
    let index = cardData.length
        // While there remain elements to shuffle.
        while (index !== 0) {
          // Pick a remaining element.
          let randomIndex = Math.floor(Math.random() * index);
          index--;
          // And swap it with the current element.
          [cardData[index], cardData[randomIndex]] = [
            cardData[randomIndex], cardData[index]];
        }
    const hand1 = cardData.slice(0,4);
    const hand2 = cardData.slice(4,8);
    const hands = [hand1, hand2];

    return (
        <div className ="Pokegame">
            {hands.map(hand => <Pokedex cardData={hand}/>)}
        </div>
    )
}

export default Pokegame;
    