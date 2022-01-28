/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout/Layout";
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
    return (
        <Layout>
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <img src="profile.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                        }} className="card-content">
                            <div className="content">
                                <h1>Benjamin T. Chacko</h1>
                                <div style={{
                                    color: "black",
                                    lineHeight: "normal"
                                }}>Thank you for checking out my quiz app! I sincerely hope that you find the content enjoyable and you get inspired to utilize your own creative talents.</div> <br />
                                <div style={{
                                    color: "black",
                                    lineHeight: "normal"
                                }}>My maternal grandfather, T.P. Abraham, was naturally gifted in the arts, painting and pencil art, and this web app is an attempt to see if I have some of his creative genes in me.</div><br />
                                <div style={{
                                    color: "black",
                                    lineHeight: "normal"
                                }}>Fun Facts:
                                    <ul style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        listStyle: "none",
                                    }}>
                                        <li>Favorite Sport: Baseball</li>
                                        <li>Favorite Board Game: Chess</li>
                                        <li>Favorite Food: Burger and Fries</li>
                                        <li>Favorite Movie: Lord of the Rings</li>
                                        <li>Favorite TV Show(s): Person of Interest, Stargate Atlantis, and Leverage</li>
                                    </ul></div><br />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    color: "black",
                                    fontSize: "1.5rem",
                                    alignItems: "center",
                                }}>Connect with me on these platforms:<br />
                                    <a style={{
                                        fontSize: "3rem",
                                        marginRight: "1rem",
                                    }} href="https://www.linkedin.com/in/benjamin-chacko-58125060/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                                    <a style={{
                                        fontSize: "3rem", marginRight: "1rem",
                                    }} href="https://open.spotify.com/user/aaroniron" target="_blank" rel="noreferrer"><FaSpotify /></a>
                                    <a href="mailto:benjaminchacko@outlook.com" style={{
                                        fontSize: "3rem",
                                    }} target="_blank" rel="noreferrer"><MdEmail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default About;