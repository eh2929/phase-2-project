import React, { useState, useRef, useEffect } from "react";
import Reviews from "./Reviews";

function GameList({ games, setGames }) {
  const [selectedGame, setSelectedGameLocal] = useState(games[0]);
  const selectedGameRef = useRef(null);
  const [gameReviews, setGameReviews] = useState([]);

  const handleLikeClick = () => {
    const updatedGames = games.map((game) =>
      game === selectedGame ? { ...game, liked: !game.liked } : game
    );
    setGames(updatedGames);
  };

  const addReview = (gameId, review) => {
    setGameReviews((prevReviews) => ({
      ...prevReviews,
      [gameId]: [...(prevReviews[gameId] || []), review],
    }));
  };

  useEffect(() => {
    if (selectedGame && selectedGameRef.current) {
      selectedGameRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedGame]);

  const selectGame = (game) => {
    setSelectedGameLocal(game);
  };

const selectPreviousGame = () => {
  const currentIndex = games.indexOf(selectedGame);
  const newIndex = (currentIndex - 1 + games.length) % games.length;
  setSelectedGameLocal(games[newIndex]);
};

 const selectNextGame = () => {
   const currentIndex = games.indexOf(selectedGame);
   const newIndex = (currentIndex + 1) % games.length;
   setSelectedGameLocal(games[newIndex]);
 };

  return (
    <div>
      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            ref={game === selectedGame ? selectedGameRef : null}
            className={`game-item ${game === selectedGame ? "selected" : ""}`}
            onClick={() => selectGame(game)}
          >
            <img src={game.image_url} alt={game.title} />
          </div>
        ))}
      </div>
      {selectedGame && (
        <div className="game-and-reviews">
          <div className="selected-game">
            <button onClick={selectPreviousGame}>Previous</button>
            <img src={selectedGame.image_url} alt={selectedGame.title} />
            <button onClick={selectNextGame}>Next</button>
          </div>
          <div className="game-info-and-reviews">
            <div className="game-details">
              <div className="game-title">
                <h2>{selectedGame.title}</h2>
              </div>
              <div className="game-info">
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
              <div className="button-container">
                <button className="likeButton" onClick={handleLikeClick}>
                  {selectedGame.liked ? "Unlike" : "Like"}
                </button>
              </div>
            </div>
            <div className="game-reviews">
              
              <Reviews
                reviews={selectedGame.reviews.concat(
                  gameReviews[selectedGame.id] || []
                )}
                selectedGame={selectedGame}
                addReview={addReview}
              />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameList;
