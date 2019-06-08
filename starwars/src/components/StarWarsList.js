import React from 'react';
import './StarWars.css';
import StarWars from './StarWars'

function StarWarsList(props) {
    return (
        <div className={'starWarsList'}>
           {props.starWarsList.map((starWar)=> {
               return <StarWars starWar={starWar} />
           })} 
        </div>
    )
}

export default StarWarsList;