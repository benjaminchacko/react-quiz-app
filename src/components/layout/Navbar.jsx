import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 style={{
                    marginTop: "0.3rem",
                    marginLeft: "10px",
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }}>Quiz App</h1>
            </div>
            <button role="button" className={`navbar-burger ${isActive === true ? "is-active" : null}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)} >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
            <div id="navbarBasicExample" className={`navbar-menu ${isActive === true ? "is-active" : null}`}>
                <div className="navbar-start">
                    <Link style={{
                        marginTop: "0.2rem",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                    }} className="navbar-item" to="/" >
                        Home
                    </Link>
                    <Link style={{
                        marginTop: "0.2rem",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                    }} className="navbar-item" to="/about">
                        About Creator
                    </Link>
                    <Link style={{
                        marginTop: "0.2rem",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                    }} className="navbar-item" to="/connect">
                            Connect with Creator
                    </Link>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </nav>
    );
};

export default Navbar;