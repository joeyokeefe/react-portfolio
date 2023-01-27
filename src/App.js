import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
