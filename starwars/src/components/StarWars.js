import React from 'react';
import './StarWars.css';

function StarWars(props) {
    return (
        <div>
        <h3>{props.starWar.name}</h3>
        <p>
          <strong>Height:</strong> {props.starWar.height}
        </p>
        <p>
          <strong>Gender:</strong> {props.starWar.gender}
        </p>
        <p>
          <strong>Mass:</strong> {props.starWar.mass}
        </p>
        </div>
    )
}

export default StarWars;