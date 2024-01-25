import React from "react";
import "./Collection.css";

function Collection({ games }) {
  const likedGames = games.filter((game) => game.liked);

  return (
    <div className="collection-page">
      <h2 className="title">My Liked Games</h2>
      {likedGames.length > 0 ? (
        <div className="liked-game-list">
          {likedGames.map((game) => (
            <div key={game.id} className="game-item">
              <img src={game.image_url} alt={game.title} className="game-img" />
              <p className="game-title">{game.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-games">No liked games yet.</p>
      )}
    </div>
  );
}

export default Collection;
