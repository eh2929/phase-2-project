import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";

import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/games")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.statusText);
        }
      })
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <Header />
      <GameList games={games} setSelectedGame={setSelectedGame} />
    </div>
  );
}

export default App;
