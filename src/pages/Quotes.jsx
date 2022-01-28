/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout/Layout";


const Gallery = () => {
    return (
        <Layout>
            <div className="columns">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }} className="column is-full">

                    
                <div className="card">
                    <h1 style={{
                        marginTop: "0.5rem",
                        fontSize: "1.5rem",
                        color: "black",
                        fontWeight: "bold",
                    }}>Some of My Favorite Quotes</h1>
                        <div className="card-content">
                            <div className="content">
                                <div style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: "1.1rem",
                                }}>'I wish it need not have happened in my time,' said Frodo. <br /> 'So do I,' said Gandalf, 'and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.'― J.R.R. Tolkien, The Fellowship of the Ring</div> <br />
                                <div style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: "1.1rem",
                                }}>"You can never get a cup of tea large enough or a book long enough to suit me." ― C.S. Lewis
                                </div><br />
                                <div style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: "1.1rem",
                                }}>"Sometimes the questions are complicated and the answers are simple." ― Dr. Seuss</div><br />
                                <div style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: "1.1rem",
                                }}>"The more that you read, the more things you will know. The more that you learn, the more places you'll go." ― Dr. Seuss, I Can Read With My Eyes Shut!</div><br />
                                <div style={{
                                    fontStyle: "italic",
                                    color: "black",
                                    fontSize: "1.1rem",
                                }}>"The longer I live, the more I read, the more patiently I think, and the more anxiously I inquire, the less I seem to know...Do justly. Love mercy. Walk humbly. This is enough." ― John Adams, The Letters of John and Abigail Adams</div><br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Gallery;