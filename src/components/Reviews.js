import React, { useState } from "react";

function Reviews({ reviews, selectedGame, addReview }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [reviewComment, setReviewComment] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const gameId = selectedGame.id;
    const newReview = { title, content, reviewer, gameId };
    addReview(selectedGame.id, newReview);

    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setReviewComment([]);
        setTitle("");
        setContent("");
        setReviewer("");
      });
  };

  if (!reviews) {
    return null;
  }

  return (
    <div className="reviews">
      {[...reviews, ...reviewComment].map((review, index) => (
        <div key={index}>
          {/* <h3>{review.title}</h3> */}
          <p>
            <strong>Review: </strong>
            {review.content}
          </p>
          <p>
            <strong>Name: </strong>
            {review.reviewer}
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        {/* <label>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label> */}
        <label>
          Leave a review! <br></br>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <div>
          <label>
            Name: <br></br>
            <input
              type="text"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <br></br>
          <button type="submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
}
export default Reviews;
