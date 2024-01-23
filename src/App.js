import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <Header />
      <GameList games={games} />
    </div>
  );
}

export default App;
