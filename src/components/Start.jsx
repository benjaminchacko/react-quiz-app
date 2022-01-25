/* eslint-disable react/prop-types */
import React from "react";

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Winter Olympics Knowledge Quiz</h1>
          <p>Instructions: 15 questions await you, have fun!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Start;