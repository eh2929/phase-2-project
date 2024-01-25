import React from "react";
import "./Collection.css";

function Collection({ games }) {
  const likedGames = games.filter((game) => game.liked);

  return (
    <div>
      <h2 className="title">My Liked Games</h2>
      <div className="liked-game-list">
        {likedGames.map((game) => (
          <div key={game.id}>
            <img src={game.image_url} alt={game.title} />
            <p>{game.title}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
