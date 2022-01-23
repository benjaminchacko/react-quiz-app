/* eslint-disable react/prop-types */
import React from "react";

const Modal = ({ onClose, results, data, numberOfQuestions }) => {
  console.log(data);
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your Results: </p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p>Question {(data[i].id)}/{numberOfQuestions}: <strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? "has-background-success has-text-white p-2" : "has-background-danger has-text-white p-2"}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="has-background-link has-text-white p-2">Correct answer: {data[i].answer}</p>}
                <p className="has-background-warning p-2"><a href={data[i].reference} target="_blank" rel="noreferrer">Learn More Here</a></p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;