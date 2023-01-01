// Write your Character component here
import React, {useState} from 'react';
const Character = (props) => {
    const [state,setState]=useState(false)
    const { name, gender, height, mass, birth_year, hair_color,skin_color } = props.char
    const openCharacter =()=>{
        setState(!state)
    }
    return (
        <div className='card'>
            <h2 onClick={openCharacter}>{name}</h2>
            {state&&      <div className='bio'>
            <p>gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Birthyear: {birth_year}</p>
            <p>hair color: {hair_color}</p>
            <p>skin color: {skin_color}</p>
            </div>}
        </div>
    )
}
export default Character;