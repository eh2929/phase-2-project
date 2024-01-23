import React, { useState, useRef, useEffect } from "react";

function GameList({ games }) {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const selectedGameRef = useRef(null);

  useEffect(() => {
    if (selectedGame) {
      selectedGameRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedGame]);

  const selectPreviousGame = () => {
    const currentIndex = games.indexOf(selectedGame);
    if (currentIndex > 0) {
      setSelectedGame(games[currentIndex - 1]);
    }
  };

  const selectNextGame = () => {
    const currentIndex = games.indexOf(selectedGame);
    if (currentIndex < games.length - 1) {
      setSelectedGame(games[currentIndex + 1]);
    }
  };

  return (
    <div>
      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            ref={game === selectedGame ? selectedGameRef : null}
            className={game === selectedGame ? "selected" : ""}
            onClick={() => setSelectedGame(game)}
          >
            <img src={game.image_url} alt={game.title} />
          </div>
        ))}
      </div>
      {selectedGame && (
        <div>
          <div className="selected-game">
            <button onClick={selectPreviousGame}>Previous</button>
            <img src={selectedGame.image_url} alt={selectedGame.title} />
            <button onClick={selectNextGame}>Next</button>
          </div>
          <div className="game-title">
            <h2>{selectedGame.title}</h2>
          </div>
        </div>
      )}
      {selectedGame && (
        <div className="game-details">
          <p>
            <strong>Genre:</strong> {selectedGame.genre}
          </p>
          <p>
            <strong>Description:</strong> {selectedGame.description}
          </p>
          <p>
            <strong>Mood:</strong> {selectedGame.mood}
          </p>
        </div>
      )}
    </div>
  );
}

export default GameList;
