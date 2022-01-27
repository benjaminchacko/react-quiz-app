import { useState } from "react";

import End from "../../components/End";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/Modal";
import Question from "../../components/Question";
import Start from "../../components/Start";

import quizData from "../../data/quiz.json";


const Home = () => {
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

    return (
        <Layout>
            <div>
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
        </Layout>
    );
};

export default Home;