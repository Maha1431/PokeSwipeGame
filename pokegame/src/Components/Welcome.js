import React from 'react';
import "./Welcome.css"; // Import CSS for styling

const Welcome = ({ onStart }) => {
    return (
        <div className="welcome-card">
            <h3>How to Play PokéSwipe</h3>
            <p>Pokémon Appear One at a Time <br /> Choose "Like" or "Dislike"
                <br />  Build Your Favorite Team</p>
            <button onClick={onStart} className="start-button">Let's Go</button>
        </div>
        

    );
}

export default Welcome;
