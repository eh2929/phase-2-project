import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="title">About This App</h1>
      <p className="intro">
        Welcome to <strong> Let's Find Games! </strong> This app allows you to
        explore a curated list of video games, read reviews, and build your own
        collection. Whether you're a casual gamer or a hardcore enthusiast, our
        app provides a platform for discovering and enjoying a variety of games.
      </p>
      <h2 className="outro">Key Features</h2>
      <ul>
        <li className="list">• Browse a diverse selection of video games.</li>
        <li className="list">
          • View detailed information about each game, including genre,
          description, and mood.
        </li>
        <li className="list">
          • Read and leave reviews for your favorite games.
        </li>
        <li className="list">
          • Like your preferred games to add them to your personal collection.
        </li>
      </ul>
      <h2 className="outro">How to Use</h2>
      <p className="intro">
        Navigate through the app using the menu at the top. The "Home" page
        displays a grid of games for you to explore. Click on a game to view its
        details, reviews, and even add it to your collection by clicking the
        "Like" button. The "About" page provides information about the app and
        its features. Lastly, the "Collection" page showcases the games you've
        liked.
      </p>
      <h2 className="outro">Enjoy Your Gaming Experience!</h2>
      <p className="intro">
        We hope you have a great time exploring and collecting your favorite
        video games. If you have any feedback or suggestions, feel free to reach
        out. Happy gaming!
      </p>
    </div>
  );
}

export default About;
