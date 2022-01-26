/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [questionOptions, setQuestionsOptions] = useState(1);
  const [dataBadge_5050, setDataBadge_5050] = useState(5);
  const [dataBadge_skip, setDataBadge_skip] = useState(2);
  const [dataBadge_AI, setDataBadge_AI] = useState(3);
  const [isDisabled_5050, setIsDisabled_5050] = useState(false);
  const [isDisabled_skip, setIsDisabled_skip] = useState(false);
  const [isDisabled_AI, setIsDisabled_AI] = useState(true);

  const titleRef = useRef(null);
  const radiosWrapper = useRef();


  useEffect(() => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

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
    setQuestionsOptions(1);
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
    if (dataBadge_5050 === 0) {
      setIsDisabled_5050(true);
    } else {
      setIsDisabled_5050(false);
    }
    if (dataBadge_skip === 0) {
      setIsDisabled_skip(true);
    } else {
      setIsDisabled_skip(false);
    }
  };

  const handle5050 = () => {
    setDataBadge_5050(prevState => prevState - 1);
    setQuestionsOptions(2);
    setIsDisabled_5050(true);
    setIsDisabled_skip(true);
    setError("");
    if (dataBadge_5050 === 1) {
      setError("You have used up your 50/50 hints!");
      setIsDisabled_5050(true);
    }
  };

  const handleSkip = () => {
    setIsDisabled_5050(true);
    setDataBadge_skip(prevState => prevState - 1);
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: data.answer }]);
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
    setIsDisabled_5050(false);
    if (dataBadge_skip === 1) {
      setError("You have used up your skip hints!");
      setIsDisabled_skip(true);
    }
    if (dataBadge_5050 === 0) {
      setIsDisabled_5050(true);
    } else {
      setIsDisabled_5050(false);
    }
  };

  const handleAI = () => {
    setDataBadge_AI(prevState => prevState - 1);
    setQuestionsOptions(3);
    setIsDisabled_5050(true);
    setIsDisabled_AI(true);
    if (dataBadge_AI === 1) {
      setIsDisabled_AI(true);
    }
  };

  return (
    <div ref={titleRef}>
      <div className="columns">
        <div className="column" >
          <div id="card-1" className="card">
            <div className="card-content">
              <div className="content">
                <button data-badge={dataBadge_5050} disabled={isDisabled_5050} className="button is-dark is-medium mt-3 mb-2 mx-2 is-rounded" onClick={handle5050}>50/50</button>
                <button data-badge={dataBadge_skip} disabled={isDisabled_skip} className="button is-dark is-medium mt-3 mb-2 mx-2 is-rounded" onClick={handleSkip}>Skip</button>
                <button data-badge={dataBadge_AI} disabled={isDisabled_AI} className="button is-dark is-medium mt-3 mb-2 is-rounded" onClick={handleAI}>Ask the Internet</button>
                <div style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }} className="total-questions is-size-4">Question {activeQuestion + 1} of {numberOfQuestions} <br />
                </div>
                <h3  style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }} className="mb-5">{data.question}</h3>
                {error && <div style={{
                  fontWeight: "bold",
                }} className="has-text-danger">{error}</div>}
                <div  style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }} className="control" ref={radiosWrapper}>
                  {
                    questionOptions === 1 ? data.choices.map((choice, i) => (
                      <label className="radio has-background-light" key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                        {choice}
                      </label>
                    )) : questionOptions === 2 ? data.choices_50.map((choice, i) => (
                      <label className="radio has-background-light" key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                        {choice}
                      </label>
                    )) :
                      data.choices_p.map((choice, i) => (
                        <label className="radio has-background-light" key={i}>
                          <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                          {choice}
                        </label>
                      ))
                  }
                </div>
                <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>{activeQuestion + 1 === numberOfQuestions ? "Show Results" : "Next"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div data="image=card" id="card-2" className="card">
            <div className="card-content images">
              <img src={data.image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;