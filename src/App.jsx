import React, { useState } from "react";
import "./css/App.css";

import Start from "./components/Start";
import End from "./components/End";
import Modal from "./components/Modal";
import quizData from "./data/quiz.json";

import Question from "./components/Question";

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };

  const { data } = quizData;

  console.log("App Rendering")
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
      />}

      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={data}
        numberOfQuestions={data.length}
        activeQuestion={activeQuestion}
      />}
    </div>
  );
};

export default App;