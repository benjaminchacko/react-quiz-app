import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Connect from "./components/pages/Connect";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
};

export default App;