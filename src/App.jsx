import React, { useState } from "react";
import "./css/App.css";

import Start from "./components/Start";
import End from "./components/End";
import Modal from "./components/Modal";
import quizData from "./data/quiz.json";

import QuestionLayout from "./components/QuestionLayout";

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState("00:00:00");

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setStep(1);
    setTimer(null);
  };



  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <QuestionLayout 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        timer={timer}
        setTimer={setTimer}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
      />}

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
};

export default App;