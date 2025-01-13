import React from "react";

function timePassed(specificTime) {
  // Convert the specificTime to a Date object
  const startTime = new Date(specificTime);
  const currentTime = new Date();

  // Calculate the difference in milliseconds
  const difference = currentTime - startTime;

  // Convert milliseconds to seconds, minutes, hours, days, etc.
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Create a human-readable string based on the time passed
  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (seconds > 0) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}

const NewsCard = ({ title, time, imageUrl, footer }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
      <div className="card-body">
        <p className="card-text text-secondary">{timePassed(time)}</p>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default NewsCard;
