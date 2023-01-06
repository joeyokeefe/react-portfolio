import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="vh-100">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
