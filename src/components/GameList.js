import React from "react";

function GameList({ games }) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.genre}</p>
          <p>{game.description}</p>
          <p>{game.mood}</p>
          <img src={game.image_url} alt={game.title} />
        </div>
      ))}
    </div>
  );
}

export default GameList;
