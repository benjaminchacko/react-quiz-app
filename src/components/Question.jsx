/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  console.log(data);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = () => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <div id="card-1" className="card">
          <div className="card-content images">
            <img src={data.image} alt="question" />
        </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2 className="mb-5">{data.question}</h2>
              <div className="control" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                  <label className="radio has-background-light" key={i}>
                    <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                    {choice}
                  </label>
                ))}
              </div>
              {error && <div className="has-text-danger">{error}</div>}
              <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Question;