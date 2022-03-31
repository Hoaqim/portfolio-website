import "./App.scss";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Contact />
      <div className="overlay"></div>
    </>
  );
}

export default App;
