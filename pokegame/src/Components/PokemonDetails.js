import React from 'react';
import "./PokemonDetails.css"; // Import CSS for styling

const PokemonCard = ({ pokemon, onLike, onDislike }) => {
  return (
    <div className="Pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2 className='heading'>{pokemon.name}</h2>
      <div className="abilities-container">
        {pokemon.abilities.map((ability, index) => (
          <button key={index} className="ability-box">{ability}</button>
        ))}
         {pokemon.types.map((type, index) => (
          <button key={index} className="types-box">{type}</button>
        ))}
      
      </div>
      
       
      <div className="buttons-container">
        <button onClick={onDislike} className='dislikebtn'>Dislike</button>
        <button onClick={onLike} className='likebtn'>Like</button>
      </div>
    </div>
  );
}

export default PokemonCard;
