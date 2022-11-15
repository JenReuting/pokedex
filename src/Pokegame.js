import Pokedex from './Pokedex.js';
import './Pokegame.css';

function Pokegame({ pokeData }) {

    let index = pokeData.length
    // While there remain elements to shuffle.
    while (index !== 0) {
        // Pick a remaining element.
        let randomIndex = Math.floor(Math.random() * index);
        index--;
        // And swap it with the current element.
        [pokeData[index], pokeData[randomIndex]] = 
        [pokeData[randomIndex], pokeData[index]];
    }

    const hand1 = pokeData.slice(0, pokeData.length/2);
    let hand1Exp = 0;
    for(let data of hand1){
        hand1Exp += data.base_experience;
    }
   
    const hand2 = pokeData.slice(pokeData.length/2, pokeData.length);
    let hand2Exp = 0;
    for(let data of hand2){
        hand2Exp += data.base_experience;
    }
    let hand1WinStatus = hand1Exp>hand2Exp?true:false;
    let hand2WinStatus = hand2Exp>hand1Exp?true:false;
    return (
        <div className="Pokegame">
            {/* {hands.map(hand => <Pokedex cardData={hand} />)} */}
            <Pokedex 
                cardData={hand1} 
                exp={hand1Exp}
                isWinner={hand1WinStatus}
                />
            <Pokedex 
                cardData={hand2} 
                exp={hand2Exp}
                isWinner={hand2WinStatus}
                />
        </div>
    )
}

export default Pokegame;
