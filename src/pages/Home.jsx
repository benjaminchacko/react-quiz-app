import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Home = () => {

    return (
        <Layout>
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
                        }}>Instructions: 16 questions await you and 2 hints will be at your disposal - 50/50 and Skip.
                            <ul>
                                <li>50/50 will allow you to eliminate 2 wrong answers, leaving 1 wrong answer and 1 correct answer <span style={{
                                    color: "red"
                                }}>(WARNING: This does nothing to True/False questions)</span></li>
                                <li>Skip will allow you to skip the question but still get full points. </li>
                            </ul>
                           </p>
                           <p style={{
                            color: "aqua",
                            fontSize: "2rem",
                            fontWeight: "bold",
                           }}> Have fun!</p>
                        <Link to="/quiz">
                            <button className="button is-info is-medium">Start</button>
                        </Link>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;