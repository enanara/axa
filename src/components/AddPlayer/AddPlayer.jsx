import React from 'react';
import { useState } from 'react';



const AddPlayer = ({playerName, stars}) => {
    const [players, setPlayers] = React.useState([]);
    const [nameInput, setNameinput] = useState('');
    const onAddPlayerClick = () => {

        if (nameInput === '') return;
        
        const newPlayers = [...players,{
            name: nameInput,
            stars: 3,
        }];
        setPlayers(newPlayers);
        setNameinput('');
    }

    const onTyping = (event) => {
        console.log(event.target.value);
        setNameinput(event.target.value)}
    return (<div id="AddPlayer">
        <input
            value={nameInput}
            onChange={onTyping}
        ></input>
        <button
            onClick={onAddPlayerClick}
        >+ Add Player </button>
        <div id="Player">
            <div> {players} </div>
            <div> <img alt="avatar"  /></div>
            <div>
                {
                    [
                       (<span role="img" aria-label="star">⭐ </span>),
                       (<span role="img" aria-label="star">⭐ </span>),
                       (<span role="img" aria-label="star">⭐ </span>),
                    ]
                }
                
            </div>
        </div>
    </div>)
}

export default AddPlayer;