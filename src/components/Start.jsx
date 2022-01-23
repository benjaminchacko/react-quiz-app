/* eslint-disable react/prop-types */
import React from "react";

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Winter Olympics Knowledge Quiz</h1>
          <p>Instructions: You will have 5 minutes to answer 15 questions. <br/> Good Luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Start;