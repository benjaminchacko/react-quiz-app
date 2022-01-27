/* eslint-disable react/prop-types */
const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 style={{
            color: "black",
            fontWeight: "bold",
          }}>Winter Olympics Knowledge Quiz</h1>
          <p style={{
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}>Instructions: 15 questions await you, 2 hints will be at your disposal - 50/50 and Skip. 50/50 will allow you to eliminate 2 wrong answers, leaving 1 wrong answer and 1 correct answer <span style={{
            color: "red"
          }}>(WARNING: This does nothing to True/False questions)</span>. Skip will allow you to skip the question but still get full points. Have fun! <span style={{
            color: "red"
          }}>(Note: Please visit the about page before or after and not during the quiz, Thanks!)</span></p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Start;