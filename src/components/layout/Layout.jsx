/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    return (
        <div>
            <Navbar />
            <div className="App">
                {children}
            </div>
        </div>
    );
};


export default Layout;