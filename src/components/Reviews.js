function Reviews({ reviews }) {
  if (!reviews) {
    return null;
  }

  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.title}</h3>
          <p>
            <strong>Review: </strong>
            {review.content}
          </p>
          <p><strong>Reviewer: </strong>{review.reviewer}</p>
        </div>
      ))}
    </div>
  );
}
export default Reviews;
