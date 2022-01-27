/* eslint-disable react/prop-types */

const Modal = ({ onClose, results, data, numberOfQuestions }) => {
  return (
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
                <p style={{
                  color: "black",
                  fontWeight: "bold",
                }}>Question {parseInt(data[i].id)}/{numberOfQuestions}: <strong>{result.q}</strong></p>
                <p style={{
                  color: "white",
                  fontWeight: "bold",
                }} className={result.a === data[i].answer ? "has-background-success has-text-white p-2" : "has-background-danger has-text-white p-2"}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p style={{
                  fontWeight: "bold",
                }} className="has-background-link has-text-black p-2">Correct answer: {data[i].answer}</p>}
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