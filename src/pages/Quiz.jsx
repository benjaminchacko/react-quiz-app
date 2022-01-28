import { useState } from "react";

import Score from "../components/Score";
import Modal from "../components/Modal";
import Question from "../components/Question";

import quizData from "../data/quiz.json";


const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(1);
    };

    const { data } = quizData;
    
    return (
        <div className="App">
            {step === 1 && <Question
                data={data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
            />}
            {step === 2 && <Score
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

export default Quiz;