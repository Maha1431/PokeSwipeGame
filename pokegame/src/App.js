import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Welcome from './Components/Welcome';
import PokemonCard from './Components/PokemonDetails';
import LikedPokemon from './Components/LikedPokemon';
import ThemeContextProvider, { ThemeContext } from './ThemeContext';
import './App.css';
import Pokeimg from "./assests/pokeapi_256.png";
import "@fontsource/caveat/400.css";
//  for theme icon created this 2 components
import DarkModeIcon from './dartModeIcon'; 
import LightModeIcon from './LightModeIcon';


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const fetchRandomPokemon = () => {
    // Fetch a random Pokemon from PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
        const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];
        return fetch(randomPokemon.url);
      })
      .then(response => response.json())
      .then(data => {
        const pokemonData = {
          name: data.name,
          image: data.sprites.front_default,
          abilities: data.abilities.map(ability => ability.ability.name),
          types: data.types.map(type => type.type.name)
        };
        setPokemon(pokemonData);
      })
      .catch(error => console.error('Error fetching Pokemon:', error));
  };

  const handleLike = () => {
    // if the pokemon is selected then it will go to likepokemon arrlist and next again calling fetch random pokemon
    if (pokemon) {
      setLikedPokemon([...likedPokemon, pokemon]);
      fetchRandomPokemon();
    }
  };

  const handleDislike = () => {
    // if the pokemon is disliked then fetchrandompokemon
    fetchRandomPokemon();
  };

  return (
    //  created routing for navigating each of the component
    // if the component is / then !pokemon its the welcomepAge component otherwise its redirecting pokemon component
    //  if the router /liked then its redirect liked component page
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <img src={Pokeimg} alt='Pokeimg' className="poke-img" />
         
        <nav>
          <Link to="/">Home</Link>
          <Link to="/liked">Liked Pokémon</Link>
        </nav>
        <button onClick={toggleDarkMode} className='theme'>
          {darkMode ?   <DarkModeIcon/>:<LightModeIcon/>}
        </button>
        <Routes>
        
          <Route path="/" element={
            !pokemon ? <Welcome onStart={fetchRandomPokemon} /> : (
              <PokemonCard
                pokemon={pokemon}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            )
          } />
          <Route path="/liked" element={<LikedPokemon likedPokemon={likedPokemon} />} />
        </Routes>
      </div>
    </Router>
  );
}

const AppWithTheme = () => (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

export default AppWithTheme;
