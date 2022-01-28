/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Score = ({ results, data, onReset, onAnswersCheck }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 style={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}>Your results</h2>
          <p style={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }} className="is-size-3">{correctAnswers} of {data.length}</p>
          <p style={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }} className="is-size-3"><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <div className="buttons are-normal is-justify-content-center">
            <button style={{
              fontWeight: "bold",
            }} className="button is-primary mr-2" onClick={onAnswersCheck}>Check your answers</button>
            <button style={{
              fontWeight: "bold",
            }} className="button is-primary ml-3" onClick={onReset}>Try Again</button>
            <Link to="/">
              <button style={{
                fontWeight: "bold",
              }} className="button is-primary ml-2 mt-2">Return Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;