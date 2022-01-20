/* eslint-disable react/prop-types */
import React from "react";

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>General Knowledge - Winter Olympics Quiz</h1>
          <p>Instructions: You will have 3 minutes to answer 10 questions. <br/> Good Luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Start;