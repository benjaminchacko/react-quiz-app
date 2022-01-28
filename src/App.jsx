import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Quiz from "./pages/Quiz";
import Gallery from "./pages/Gallery";
import Quotes from "./pages/Quotes";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  );
};

export default App;