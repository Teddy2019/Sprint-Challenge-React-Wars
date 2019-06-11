import React from 'react';
import './StarWars.css';

function StarWars(props) {
    return (
        <div className={'starWars'}>
          <h3 className={'name'} >{props.starWar.name}</h3>
          <div className={'starNamedata'}>
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
        </div>
    )
}

export default StarWars;