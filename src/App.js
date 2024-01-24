import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const filteredGame = games.filter((game) => {
    if (game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
    else if (game.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
    else {
      return false
    }
  })

  return (
    <div className="App">
      <Header />
      <GameList games={filteredGame} />
      <SearchBar setSearchTerm = {setSearchTerm} />
    </div>
  );
}

export default App;
