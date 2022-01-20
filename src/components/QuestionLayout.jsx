/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import Question from "./Question";
import Timer from "./Timer";

const QuestionLayout = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, timer, setTimer }) => {

    const goToResults = () => {
        onSetStep(3);
    };

    return (
        <div className="columns">
            <div className="column">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <div><Timer goToResults={goToResults} timer={timer} setTimer={setTimer} /></div>
                            {timer > "00:00:00" ? <Question data={data} onAnswerUpdate={onAnswerUpdate} numberOfQuestions={numberOfQuestions} activeQuestion={activeQuestion} onSetActiveQuestion={onSetActiveQuestion} onSetStep={onSetStep} /> :
                                <div>
                                    <h1 className="title is-1">Time's up!</h1>
                                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={goToResults}>See Results</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div id="card-1" className="card">
                    <div className="card-content images">
                        <img src={data.image} alt="question" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionLayout;