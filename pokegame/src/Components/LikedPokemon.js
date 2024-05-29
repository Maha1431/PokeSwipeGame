import React from 'react';
import './LikedPokemon.css'; // Import CSS for styling
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

const LikedPokemon = ({ likedPokemon }) => {
  return (
    //  like "Pokemonlist of structure designed here
    <div className="liked-pokemon-container">
      <h2> <NavigateBeforeOutlinedIcon />Pokémon you have liked ❤️</h2>
      <div className="liked-pokemon-grid">
        {likedPokemon.map(pokemon => (
          <div key={pokemon.name} className="liked-pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedPokemon;
